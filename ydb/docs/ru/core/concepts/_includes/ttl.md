# Time to Live (TTL) и вытеснение данных во внешнее хранилище

В разделе описан принцип работы TTL и его ограничения.

## Принцип работы {#how-it-works}

TTL таблицы задаётся последовательностью тиров хранения. Для каждого тира задаётся выражение, при срабатывании которого строке присваивается данный тир. Когда строке будет присвоен тир, TTL автоматически выполнит заданное действие: перенесёт строку во внешнее хранилище или удалит её. Внешние хранилища представляются объектом [external data source](../datamodel/external_data_source.md).

{{ ydb-short-name }} позволяет указать для строковых и колоночных таблиц колонку (TTL-колонка), значения которой будут использоваться в TTL-выражениях. Выражение срабатывает, когда проходит указанное количество секунд от времени, записанного в TTL-колонку. Если в TTL-колонке `NULL`, то выражение никогда не сработает.

Момент времени, когда срабатывает TTL-выражение, определяется по следующей формуле:

```text
eviction_time = valueof(ttl_column) + evict_after_seconds
```

{% note info %}

Не гарантируется, что удаление произойдет именно в `eviction_time` — оно может случиться позже. Если важно исключить из выборки логически устаревшие, но пока еще физически не удаленные строки, нужно использовать фильтрацию уровня запроса.

{% endnote %}

Непосредственно удалением данных занимается фоновая операция удаления — *Background Removal Operation* (*BRO*), состоящая из 2 стадий:

1. Проверка значений в TTL-колонке.
1. Удаление устаревших данных.

*BRO* обладает следующими свойствами:

* Единицей параллельности является [партиция таблицы](../datamodel/table.md#partitioning).
* Для таблиц со [вторичными индексами](../secondary_indexes.md) стадия удаления является [распределенной транзакцией](../transactions.md#distributed-tx).

## Гарантии {#guarantees}

* Для одной и той же партиции *BRO* запускается с периодичностью, заданной в настройках TTL. Интервал запуска по умолчанию — 1 час, минимально допустимое значение — 15 минут.
* Гарантируется согласованность данных. Значение в TTL-колонке повторно проверяется во время стадии удаления. Таким образом, если между стадиями 1 и 2 значение в TTL-колонке модифицируется (например, запросом `UPDATE`) и перестает соответствовать критерию удаления, такая строка не будет удалена.

## Ограничения {#restrictions}

* TTL-колонка должна быть одного из следующих типов:

  * `Date`;
  * `Datetime`;
  * `Timestamp`;
  * `Uint32`;
  * `Uint64`;
  * `DyNumber`.

* Значение TTL-колонки с числовым типом (`Uint32`, `Uint64`, `DyNumber`) интерпретируется как величина от [Unix-эпохи](https://ru.wikipedia.org/wiki/Unix-время). Поддерживаемые единицы измерения (задаются в настройках TTL):

  * секунды;
  * миллисекунды;
  * микросекунды;
  * наносекунды.

* Нельзя указать несколько TTL-колонок.
* Нельзя удалить TTL-колонку. Если это все же требуется, сначала нужно [выключить TTL](../../yql/reference/recipes/ttl.md#disable) на таблице.
* В качестве типа внешнего хранилища доступен только {{ objstorage-name }}.
* Действие `DELETE` может быть задано только для последнего тира.

## Настройка {#setting}

Управление настройками TTL в настоящий момент возможно с использованием:

* [YQL](../../yql/reference/recipes/ttl.md).
* [Консольного клиента {{ ydb-short-name }}](../../recipes/ydb-cli/ttl.md).
* {{ ydb-short-name }} {% if oss %}C++, {% endif %}Go и Python [SDK](../../recipes/ydb-sdk/ttl.md).

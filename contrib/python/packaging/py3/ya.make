# Generated by devtools/yamaker (pypi).

PY3_LIBRARY()

VERSION(25.0)

LICENSE(BSD-2-Clause AND Apache-2.0)

NO_LINT()

PY_SRCS(
    TOP_LEVEL
    packaging/__init__.py
    packaging/_elffile.py
    packaging/_manylinux.py
    packaging/_musllinux.py
    packaging/_parser.py
    packaging/_structures.py
    packaging/_tokenizer.py
    packaging/licenses/__init__.py
    packaging/licenses/_spdx.py
    packaging/markers.py
    packaging/metadata.py
    packaging/requirements.py
    packaging/specifiers.py
    packaging/tags.py
    packaging/utils.py
    packaging/version.py
)

RESOURCE_FILES(
    PREFIX contrib/python/packaging/py3/
    .dist-info/METADATA
    .dist-info/top_level.txt
    packaging/py.typed
)

END()

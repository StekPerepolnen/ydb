# Generated by devtools/yamaker.

LIBRARY()

VERSION(16.0.0)

LICENSE(Apache-2.0 WITH LLVM-exception)

LICENSE_TEXTS(.yandex_meta/licenses.list.txt)

PEERDIR(
    contrib/libs/llvm16
    contrib/libs/llvm16/include
    contrib/libs/llvm16/lib/Object
    contrib/libs/llvm16/lib/Option
    contrib/libs/llvm16/lib/Support
    contrib/libs/llvm16/lib/TargetParser
)

ADDINCL(
    ${ARCADIA_BUILD_ROOT}/contrib/libs/llvm16/lib/ToolDrivers/llvm-dlltool
    contrib/libs/llvm16/lib/ToolDrivers/llvm-dlltool
)

NO_COMPILER_WARNINGS()

NO_UTIL()

SRCS(
    DlltoolDriver.cpp
)

END()

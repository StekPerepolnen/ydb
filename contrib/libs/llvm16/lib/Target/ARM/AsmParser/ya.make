# Generated by devtools/yamaker.

LIBRARY()

VERSION(16.0.0)

LICENSE(Apache-2.0 WITH LLVM-exception)

LICENSE_TEXTS(.yandex_meta/licenses.list.txt)

PEERDIR(
    contrib/libs/llvm16
    contrib/libs/llvm16/include
    contrib/libs/llvm16/lib/MC
    contrib/libs/llvm16/lib/MC/MCParser
    contrib/libs/llvm16/lib/Support
    contrib/libs/llvm16/lib/Target/ARM/MCTargetDesc
    contrib/libs/llvm16/lib/Target/ARM/TargetInfo
    contrib/libs/llvm16/lib/Target/ARM/Utils
    contrib/libs/llvm16/lib/TargetParser
)

ADDINCL(
    ${ARCADIA_BUILD_ROOT}/contrib/libs/llvm16/lib/Target/ARM
    contrib/libs/llvm16/lib/Target/ARM
    contrib/libs/llvm16/lib/Target/ARM/AsmParser
)

NO_COMPILER_WARNINGS()

NO_UTIL()

SRCS(
    ARMAsmParser.cpp
)

END()

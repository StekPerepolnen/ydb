# Generated by devtools/yamaker.

LIBRARY()

VERSION(14.0.6)

LICENSE(Apache-2.0 WITH LLVM-exception)

LICENSE_TEXTS(.yandex_meta/licenses.list.txt)

PEERDIR(
    contrib/libs/llvm14
    contrib/libs/llvm14/lib/CodeGen
    contrib/libs/llvm14/lib/DebugInfo/DWARF
    contrib/libs/llvm14/lib/ExecutionEngine
    contrib/libs/llvm14/lib/ExecutionEngine/RuntimeDyld
    contrib/libs/llvm14/lib/IR
    contrib/libs/llvm14/lib/Object
    contrib/libs/llvm14/lib/Support
)

ADDINCL(
    contrib/libs/llvm14/lib/ExecutionEngine/PerfJITEvents
)

NO_COMPILER_WARNINGS()

NO_UTIL()

SRCS(
    PerfJITEventListener.cpp
)

END()

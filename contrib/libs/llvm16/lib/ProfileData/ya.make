# Generated by devtools/yamaker.

LIBRARY()

VERSION(16.0.0)

LICENSE(Apache-2.0 WITH LLVM-exception)

LICENSE_TEXTS(.yandex_meta/licenses.list.txt)

PEERDIR(
    contrib/libs/llvm16
    contrib/libs/llvm16/include
    contrib/libs/llvm16/lib/DebugInfo/DWARF
    contrib/libs/llvm16/lib/DebugInfo/Symbolize
    contrib/libs/llvm16/lib/Demangle
    contrib/libs/llvm16/lib/IR
    contrib/libs/llvm16/lib/Object
    contrib/libs/llvm16/lib/Support
    contrib/libs/llvm16/lib/TargetParser
)

ADDINCL(
    contrib/libs/llvm16/lib/ProfileData
)

NO_COMPILER_WARNINGS()

NO_UTIL()

SRCS(
    GCOV.cpp
    InstrProf.cpp
    InstrProfCorrelator.cpp
    InstrProfReader.cpp
    InstrProfWriter.cpp
    MemProf.cpp
    ProfileSummaryBuilder.cpp
    RawMemProfReader.cpp
    SampleProf.cpp
    SampleProfReader.cpp
    SampleProfWriter.cpp
)

END()

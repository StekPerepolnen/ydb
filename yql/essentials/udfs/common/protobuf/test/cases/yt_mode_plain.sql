/*
syntax='proto3';

message Test {
  message InnerInner {
    string a = 1;
  }
  message Inner {
    InnerInner i = 1;
  }
  Inner inner = 1;
}
*/

$configNO = @@{
  "name": "Test",
  "format": "json",
  "skip": 0,
  "lists": {
    "optional": false
  },
  "meta": "eNrjamXk4i7ISczM0ysoyi/JV8rjYglJLS4RUuRizczLSy2SYFRg1OA24tYDiep5goSCIDJSUlxcYD6YEOLhYkwEK+YMYkyUUudihQjLcTFmQs0QQDIDYhBjZhIb2FpjAIm1I9Q=",
  "view": {
    "recursion": "bytes",
    "enum": "number",
    "yt_mode": true
  }
}
@@;

/*
syntax='proto3';

import "yt/yt_proto/yt/formats/extension.proto";

message Test {
  option (NYT.default_field_flags) = SERIALIZATION_YT;
  message InnerInner {
    option (NYT.default_field_flags) = SERIALIZATION_YT;
    string a = 1;
  }
  message Inner {
    option (NYT.default_field_flags) = SERIALIZATION_YT;
    InnerInner i = 1;
  }
  Inner inner = 1;
}
*/

$configYT = @@{
  "name": "Test",
  "format": "json",
  "skip": 0,
  "lists": {
    "optional": false
  },
  "meta": "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",
  "view": {
    "recursion": "bytes",
    "enum": "number",
    "yt_mode": true
  }
}
@@;

/*
syntax='proto3';

import "yt/yt_proto/yt/formats/extension.proto";

message Test {
  option (NYT.default_field_flags) = SERIALIZATION_PROTOBUF;
  message InnerInner {
    option (NYT.default_field_flags) = SERIALIZATION_PROTOBUF;
    string a = 1;
  }
  message Inner {
    option (NYT.default_field_flags) = SERIALIZATION_PROTOBUF;
    InnerInner i = 1;
  }
  Inner inner = 1;
}
*/

$configPB = @@{
  "name": "Test",
  "format": "json",
  "skip": 0,
  "lists": {
    "optional": false
  },
  "meta": "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",
  "view": {
    "recursion": "bytes",
    "enum": "number",
    "yt_mode": true
  }
}
@@;

$udfParNO = Udf(Protobuf::Parse, $configNO as TypeConfig);
$udfSerNO = Udf(Protobuf::Serialize, $configNO as TypeConfig);
$udfParYT = Udf(Protobuf::Parse, $configYT as TypeConfig);
$udfSerYT = Udf(Protobuf::Serialize, $configYT as TypeConfig);
$udfParPB = Udf(Protobuf::Parse, $configPB as TypeConfig);
$udfSerPB = Udf(Protobuf::Serialize, $configPB as TypeConfig);

SELECT TestField,
      $udfParNO(TestField),
      $udfSerNO($udfParNO(TestField)),
      $udfParYT(TestField),
      $udfSerYT($udfParYT(TestField)),
      $udfParPB(TestField),
      $udfSerPB($udfParPB(TestField)),
FROM plato.Input;


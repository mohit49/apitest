const selectors = {
    projectCode :"unilever2",
    apiKey:"e95fb704e9e940deb6d37e6ae957a2b2",
    barearToken:"eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3MDk4NjU5ODAzOTJfMGYwNTE2NzQtNWVlYy00NjVlLWFjMmUtOWQ4OGJkYzMwNGI0X3VlMSIsIm9yZyI6IjEyODk4MURENTlERkE0REEwQTQ5NURCMkBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJlOTVmYjcwNGU5ZTk0MGRlYjZkMzdlNmFlOTU3YTJiMiIsInVzZXJfaWQiOiIyQkYwMUQ2ODY1RUE2NkE4MEE0OTVGOUFAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiIyQkYwMUQ2ODY1RUE2NkE4MEE0OTVGOUFAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiJkNTFiNGM4MSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNzA5ODY1OTgwMzkyIiwic2NvcGUiOiJvcGVuaWQsQWRvYmVJRCx0YXJnZXRfc2RrLGFkZGl0aW9uYWxfaW5mby5yb2xlcyxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0In0.gMeBdwqrO3Am_cNsuijSglMKng-h-zJ27Ly3myuw4nu-2F3KnGT4I2prMeoZGOtKyK-9iecLnIKu179_OYjAYWab--hR5ePYHA3I9cxKWdrHj2xixFuQg0WUYuL3-peLJbw2XfPrCNN8TERLi1n9kMhj74-gCDfE4VQkE9bWu30iGkYPb-YNXVdViXzeGGsLNGzmEzkcgIl6u6-QgvYEU97Nr19WIefgayA2d0hoJ5c9T_9AO1SWjvJDY4RzHmSGzi78mQRqweM-QGd5fLaBD301M09lAXRYmu1Jr1NKU1w7RB6hTGofwIeaYNK11maCDWt7c4IpvDrJIVN6f0-Xzw",
    dateLimit: "2023-01-01T02:04:00.000-07:00/2042-03-08T14:10:00.000-07:00",
   

};
let lastFetchCount = 0;

function getActivities() {
    const myHeaders = new Headers();
myHeaders.append("x-api-key", selectors.apiKey);
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3MDk4NjA1OTEyMzBfMjZlNjQxNGMtYzk2NS00ZTIyLTlhZDEtNTZmZGU5M2RkYjFhX3VlMSIsIm9yZyI6IjEyODk4MURENTlERkE0REEwQTQ5NURCMkBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJlOTVmYjcwNGU5ZTk0MGRlYjZkMzdlNmFlOTU3YTJiMiIsInVzZXJfaWQiOiIyQkYwMUQ2ODY1RUE2NkE4MEE0OTVGOUFAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiIyQkYwMUQ2ODY1RUE2NkE4MEE0OTVGOUFAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiIxNTkyMGQwYiIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxhZGRpdGlvbmFsX2luZm8ucm9sZXMscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNzA5ODYwNTkxMjMwIn0.WRIE0Rq0WZ2ezZpizxc5mTwGeBNYdKYjEinfIEFDYDQqanYGhcJfeChh3gelF61BNYxCSAZpFs8jmzEDgNjdabLNdOFuOmGEIsZk2zzQyAEv61-7ijWFX3K1sFYGUkw0M7h1-TCrGiB4TPw9C-PzOKXIvO4mp_YXEgvKRnB64u1LHR59Xk_vLiHnwOEFi21VPIjv4Xq93Uz2tMp5QEpK8p2kLmif55FcS1hifcM742495GT-zh_QoRgVp67nSq_xwe9_gC2CbMUr0bUkBfL5WRuALFDEu_U2lWgImrHcETRFyvHFD2NBlfMDbkts3olrjIEXfvBcv2mY_RDv0u-rBA");
myHeaders.append("expires_in", "86399990");

myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5500');
myHeaders.append('Access-Control-Allow-Credentials', 'true');
myHeaders.append("Cache-Control" , "no-cache");
myHeaders.append("Accept" , "*/*");
myHeaders.append("Accept-Encoding" , "gzip, deflate, br");
myHeaders.append("Content-Type" , "application/vnd.adobe.target.v1+json");

const requestOptions = {
  method: "GET",
  mode: 'no-cors',
  headers: myHeaders,
  redirect: "follow"
 
  
};

fetch(`https://mc.adobe.io/unilever2/target/activities/?limit=20`, requestOptions)
.then((response) => response.json())
.then((result) => console.log(result))
.catch((error) => console.error(error));
}

getActivities();
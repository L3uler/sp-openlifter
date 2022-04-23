import { LiftResultApiModel } from "../types/dataTypes";

function postLiftResultToApi(resultModel: LiftResultApiModel) {
  const apiConfig = window["apiConfig"];
  const requestOptions: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resultModel),
  };
  fetch(`${apiConfig.baseUrl}${apiConfig.liftResult.route}`, requestOptions).catch(function (err) {
    console.log(err);
  });
}

export default postLiftResultToApi;

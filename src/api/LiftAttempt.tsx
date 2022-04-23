import { LiftAttemptApiModel } from "../types/dataTypes";

function postLiftAttemptToApi(attemptModel: LiftAttemptApiModel) {
  if (attemptModel.lifter == null) {
    console.error("Cannot post null lifter.");
    return;
  }

  const apiConfig = window["apiConfig"];
  const requestOptions: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(attemptModel),
  };
  fetch(`${apiConfig.baseUrl}${apiConfig.liftAttempt.route}`, requestOptions).catch(function (err) {
    console.log(err);
  });
}

export default postLiftAttemptToApi;

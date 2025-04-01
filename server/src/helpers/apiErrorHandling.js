export function apiErrorHandling(res, error) {
  if (error?.response?.data) {
    return res.status(error.response.status).send(error.response.data);
  }

  res.status(error.status).send(error.message);
}

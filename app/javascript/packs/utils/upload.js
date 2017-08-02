const token = () => localStorage.getItem("auth_token")
const config = (obj) => {
  const formData = new FormData()
  formData.append("file", obj.file)
  formData.append("imageable_type", obj.type)

  return {
    method: "POST",
    headers: {
      authorization: `Bearer ${token()}`,
    },
    body: formData,
  }
}
const upload = (obj) => {
  return fetch("/api/images", config(obj))
}

export default upload

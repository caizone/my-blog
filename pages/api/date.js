export default (req, res) => {
  const date = new Date()
  const today = `today is ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  res.status(200).send(today)
}
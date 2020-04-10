const express = require("express")
const apiRoutes = require("./routes/apiRoutes")
const path = require("path")

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  express.static("public", {
    extensions: "html",
  })
)

// Routes
apiRoutes(app)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notFound.html"))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
)

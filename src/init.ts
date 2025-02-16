import server from "./server"

server.listen(process.env.PORT, () => {
   if (process.env.NODE_ENV == 'production') {
      console.log(`"Production" Server running on port ${process.env.PORT}`);
   }

   if (process.env.NODE_ENV == 'development') {
      console.log(`"Develop" Server running on port ${process.env.PORT}`);
   }
})

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method=='POST'){
    console.log(req.body.first)
    res.status(200).json({hi:"hi"})
  }
  // res.status(200).json({ name: 'John Doe' })
}

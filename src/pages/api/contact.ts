import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import Cors from 'cors';
import initMiddleware from './initMiddleware';

const mailer = createTransport({
  service: process.env.EMAIL_SERVICE,
  secure: process.env.NODE_ENV === 'production',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    credentials: true,
    origin: 'same-origin',
    methods: ['POST']
  })
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
  if (req.method === 'POST') {
    const { email, msg } = JSON.parse(req.body);
    const k = await mailer.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: 'lucas.vergara@usm.cl',
      subject: 'Contacto desde portafolio',
      html: `<p> Emisor: <strong> ${email} </strong> <br/> ${msg} </p>`
    });
    console.log(k);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ msg: 'Mensaje Enviado' });
  } else {
    res.statusCode = 405;
    res.json({ msg: 'WHAT' });
  }
}
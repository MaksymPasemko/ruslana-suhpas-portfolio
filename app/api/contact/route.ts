import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, brand, message } = await req.json()

  const res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "pasemko76@gmail.com",   
    subject: `Новий запит від ${name}`,
    html: `
      <p><b>Ім'я:</b> ${name}</p>
      <p><b>Email / месенджер:</b> ${email}</p>
      <p><b>Бренд:</b> ${brand || "—"}</p>
      <p><b>Опис проєкту:</b><br/>${message}</p>
    `,
  })

  console.log(res)
  return NextResponse.json({ ok: true })
}
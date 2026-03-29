import { Resend } from "resend"
import { NextResponse } from "next/server"

const resendApiKey =
  process.env.RESEND_API_KEY ||
  process.env.RESEND_KEY ||
  process.env.NEXT_PUBLIC_RESEND_API_KEY

export async function POST(req: Request) {
  try {
    const { name, email, brand, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Required fields are missing." },
        { status: 400 }
      )
    }

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Add RESEND_API_KEY (or RESEND_KEY)." },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)
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
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    )
  }
}
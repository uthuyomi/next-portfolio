import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "入力不足です" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // あなたへの通知
    await transporter.sendMail({
      from: `"ポートフォリオサイト" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `【問い合わせ】${name}さんより`,
      text: `
【お名前】${name}
【メール】${email}
【メッセージ】
${message}
      `,
    });

    // 自動返信（日本語）
    await transporter.sendMail({
      from: `"ポートフォリオサイト" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "お問い合わせありがとうございます",
      text: `
${name} 様

このたびはお問い合わせいただきありがとうございます。
以下の内容で受け付けました。

---------------------------------
【お名前】${name}
【メール】${email}
【メッセージ】
${message}
---------------------------------

通常2〜3営業日以内にご連絡させていただきます。
このメールは自動送信です。返信の必要はありません。
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("メール送信エラー:", err);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}

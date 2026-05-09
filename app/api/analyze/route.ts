import { NextResponse } from "next/server";
import { analyzeText } from "@/lib/ruleEngine";

export async function POST(req: Request) {
  const body = await req.json();
  const result = analyzeText(body.text || "");

  return NextResponse.json({ result });
}

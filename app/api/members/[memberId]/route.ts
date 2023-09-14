import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { memberId: string } }
) {
  try {
  } catch (error) {
    console.log("MEMBERSID_PATCH", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// import { connectDB } from "@/utils/connect";

// export async function POST(req, res) {
//   export async function POST(req: { json: () => PromiseLike<{ userName: any; email: any; password: any; }> | { userName: any; email: any; password: any; }; }) {
//   try {
//     await connectDB();
//     const { userName, email, password } = req.body;
//     console.log({userName, email, password});
//     res.json({userName, email, password})
//     return;
//   } catch (error) {
//     console.log("register api error:", error);
//   }
// }

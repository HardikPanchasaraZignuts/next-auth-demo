import { auth } from '@/auth';

export default async function page() {
  const session = await auth();
  return (
    <div className="text-center mt-10 font-semibold text-slate-600">
      welcome{" "}
      <span className="text-orange-300">
        {session?.user?.name}
      </span>
    </div>
  );
}

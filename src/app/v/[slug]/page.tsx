import { RedirectType, notFound, redirect } from "next/navigation";
import React from "react";
import { db } from "~/server/db";

const getSlug = async (slug: string) => {
  const row = await db.query.slug.findFirst({
    where: (tb, op) => op.eq(tb.slug, slug),
  });
  return row;
};

export const runtime = "edge";

const Page: React.FC<{
  params: {
    slug: string;
  };
}> = async ({ params: { slug } }) => {
  const row = await getSlug(slug);
  if (!row) {
    notFound();
  } else {
    redirect(row.url, RedirectType.replace);
  }
};

export default Page;

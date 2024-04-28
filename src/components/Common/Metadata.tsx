import Head from "next/head"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Naomaru DESIGN",
  description: "なおまるでざいん"
}

export default function Metadata() {
  return (
    <Head>
      <title>Naomaru DESIGN</title>
      <meta property="description" content="なおまるでざいん" />
    </Head>
  )
};
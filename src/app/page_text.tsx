"use client";

//ローディング画面テスト用

async function getData() {
  const res = await fetch('https://api.example.com/');

  return res.json();
}

export default async function Page() {
  const data = await getData()

  return <main></main>
}
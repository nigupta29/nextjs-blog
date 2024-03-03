export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h3>{params.id}</h3>
    </div>
  )
}

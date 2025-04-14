type Props = {
    item : {
        name : string,
        quantity : number
    }
}

export default function Item(props: Props) {
  return (
    <div className="flex justify-between container w-72 mx-auto">
     <h1>{props.item.name}</h1>
     <span>{props.item.quantity}</span>
    </div>
  )
}

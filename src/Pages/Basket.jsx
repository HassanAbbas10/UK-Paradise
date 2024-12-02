import PageHeader from "@/components/PageHeader/PageHeader"


const Basket = () => {
  return (
    <div>
      <PageHeader heading={"Basket"}/>
      <div className=" mx-auto px-4 py-8">
        <div className="bg-blue-100 text-blue-800 p-4 rounded-md">
          <p>Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  )
}

export default Basket
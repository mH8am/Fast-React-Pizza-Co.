export default function App({ Header, Menu, Footer, pizzaData, Pizza, Order }) {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} Pizza={Pizza} />
      <Footer Order={Order} />
    </div>
  );
}

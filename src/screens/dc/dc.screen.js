import { HeroListComponent } from "../../components/hero-list/hero-list.component";

export const DcScreen = () => {
  const publisher = 'DC Comics';
  return (
    <>
      <h1>Héroes de DC</h1>
      <hr></hr>
      <HeroListComponent publisher={ publisher }></HeroListComponent>
    </>
  )
}

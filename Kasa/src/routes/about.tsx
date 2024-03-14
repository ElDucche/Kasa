import Accordeon from "../components/layout/Accordeon"
import Banner from "../components/layout/Banner"

const About = () => {

  return (
    <div className='h-full w-full grid gap-4 pb-4'>
      <Banner title={false} img={'mountain.png'}/>
      <div className="grid gap-4">
        <Accordeon title={'Fiabilité'}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Accordeon>
        <Accordeon title={'Respect'}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Accordeon>
        <Accordeon title={'Service'}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Accordeon>
        <Accordeon title={'Sécurité'}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </Accordeon>
      </div>

    </div>
  )
}

export default About
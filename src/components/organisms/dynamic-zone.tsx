import { LandingType } from '@/data/landings';

interface IDynamicZone {
  components: LandingType[];
}

export default function DynamicZone({ components }: IDynamicZone) {
  return (
    <div>DynamicZone</div>
  )
}

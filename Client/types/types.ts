import { LocationSnapshot } from '../../Locations/graphql/Locations.generated';

export type FormData = Omit<LocationSnapshot, '__typename' | 'createdAt' | 'updatedAt' | 'parties'>;

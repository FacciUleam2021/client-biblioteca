import { ArtistModel } from "./artist.model";

export interface TrackModel {
    name: string;
    
    link: string;
    url: string;
    id: string | number;
    artist?: ArtistModel;
}
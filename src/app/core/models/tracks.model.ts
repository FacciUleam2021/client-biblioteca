import { ArtistModel } from "./artist.model";

export interface TrackModel {
    name: string;
    
    link: string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}
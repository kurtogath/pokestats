export interface PkedexesResp {
    id: number;
    name:string;
    is_main_series:boolean;
    // descriptions:Array<Description>;
    // names:Array<Name>;
    // pokemon_entries:Array<PokemonEntry>
    // region:NamedAPIResource (Region);
    // version_groups:Array<NamedAPIResource (VersionGroup)>
}

// export interface PokedexesResp {
//     id: number;
//     name:string;
//     abilities: Array<Ability>; 
//     names:Array<>;
//     main_region:Array<> | [];
//     moves: Array<> | [];
//     pokemon_species:Array<> |[];
//     types: Array<> | [];
//     version_groups: Array<> | [];
// }




// interface Ability {
//     id:number;
//     name:string;
//     is_main_series:boolean;
//     // generation:NamedAPIResource (Generation);
//     names:Array<Name>;
//     effect_entries:Array<VerboseEffect>;
//     effect_changes:Array<AbilityEffectChange>;
//     flavor_text_entries:Array<AbilityFlavorText>;
//     pokemon:Array<AbilityPokemon>;
// }


// export interface IDeliveryNoteLines extends IArticle {
//     id: number;
//     ACL_Referencia: string;
//     ACL_Cantidad: number;
//     ACL_Linea: number;
//     ACL_Descripcion: string;
//     ArU_Ubicacion: string;
// }
export default interface Product {


    hs_code: string|'';
    id: string | '';
    category: {
        name: string|'';
        id: string|'';
        parent_id: string|'';
    },
    origin: {
        name: string|'';
    },
    image_url: string|'';
    name: string|'';
    created_at: number | 0 ;
    updated_at: number | 0 ;
    quantity_items: number | 0 ;
    price: number | 0 ;
    ingredients: string|'';
    tax_percent: number | 0 ;
    width: number | 0 ;
    length: number | 0 ;
    height: number | 0 ;
    weight: number | 0 ;
    special: boolean| false;
    private_license: boolean| false;
    banned_export: boolean| false;
    banned_air: boolean| false;
    banned_sea: boolean| false;
}

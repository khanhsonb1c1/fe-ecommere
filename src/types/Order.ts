export default interface Order {
    lading_bills: [
        {
            area_id: string | "";
            container_id: string | "";
            contract_id: string | "";
            created_at: number | 0;
            updated_at: number | 0;
            currency_id: string | "";
            id: string | "";
            shipment_method_id: string | "";
            name: string | "";
            weight_cubic_meter: number | 0;
            freight_charge: number | 0;
        }
    ];
    first_item: {
        amount: number | 0;
        quantity: number | 0;
        product: {
            name: string | '';
            image_url: string | '';
            id: string | '';

        };
    },

    related_trackings:[
        {
            code: string | '';
            updated_at: number | 0;
            received: boolean | undefined;

        }
    ];

    type:{
        name: string | '';
    },
    cod_cost: number | 0;
    additional_cost: number | 0;
    purchase_cost: number | 0;
    shipment_method_id: string | "";
    service_fee: number | 0;
    service_fee_currency_id: string;
    id: string | "";
    trackings: [
        {
            code: string | "";
        }
    ];
    shipment_info: {
        address: string | "";
        consignee: string | "";
        created_at: number | 0;
        full_address: string | "";
        note: string | "";
        sender_name: string | "";
        sender_tel: string | "";
        tel: string | "";
        updated_at: number | 0;
    };
    repackage: boolean | false;
    merge_package: boolean | false;
    created_at: number | 0;
    updated_at: number | 0;
    note: string | "";
    status: {
        name: string | "";
    };
    contract_id: string | "";
    owning_boxes_from_origin: [
        {
            box: {
                id: string | "";
                duplicate: string | "";
                weight: number | 0;
                length: number | 0;
                width: number | 0;
                height: number | 0;
                volume: number | 0;
                updated_at: number | 0;
                items: [
                    {
                        product: {
                            name: string | "";
                            price: number | 0;
                            image_url: string | "";
                        };
                        quantity: number | 0;
                    }
                ];
            };
        }
    ];
}
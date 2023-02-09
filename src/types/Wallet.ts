export default interface Wallet {
    id: string | '';
    currency_id: string | '';
    balance: number | 0;
    amount_available_for_payment: number | 0;
    walletable_type: string | '';
    organization_id: string | '';
    updated_at: string | '';
    credit_limit: number | 0;
}

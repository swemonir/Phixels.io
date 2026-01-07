export interface InitialFormData {
    name: string;
    email: string;
    phone: string;
    budget: string;
    message: string;
    fileName?: string;
}

export interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface BookedSlot {
    date: string;
    time: string;
}

import { User } from "./user";

export class Property {
    public id: number;
    public name: string;
    public propertyType: string;
    public propertyPrice: number;
    public propertyCountry: string;
    public propertyState: string;
    public propertyCity: string;
    public propertyAddress1: string;
    public propertyAddress2: string;
    public propertyZipCode: string;
    public lastLoginDateDisplay!: Date;
    public propertyImage!: File;
    public propertyOwner!: User;
    public propertyCleaningFee: number;
    public theSpace_noOfAccommodation: string;
    public theSpace_noOfBathrooms: number;
    public theSpace_noOfBedrooms: string;
    public beds_noOfKing: string;
    public beds_noOfQueen: string;
    public beds_noOfSingle: string;
    public bathrooms_noOfMasterBathroom: string;
    public bathrooms_noOfPrivateBathroom: string;
    public bathrooms_noOfHalfBath: string;

    public sharedSpaces_laundryRoom: string;
    public sharedSpaces_outDoorParking: string;
    public sharedSpaces_garage: string;
    public sharedSpaces_balcony: string;
    public sharedSpaces_backyard: string;
    public amenities_wifi: string;
    public amenities_towelsBedsheetsSoapAndToiletpaper: string;
    public amenities_shampoo: string;
    public amenities_closetDrawers: string;
    public amenities_hairDryer: string;
    public amenities_LEDTV: string;
    public amenities_grill: string;
    public amenities_parking: string;
    public amenities_outdoorSwimmingPool: string;
    public amenities_ironBoard: string;
    public amenities_satelliteOrCable: string;
    public amenities_boardGames: string;
    public amenities_Internet: string;
    public description: string;
    public image1: boolean;
    public image2: boolean;
    public image3: boolean;
    public image4: boolean;
    public image5: boolean;
    public image6: boolean;
    public image7: boolean;
    public image8: boolean;
    public image9: boolean;
    public image10: boolean;
    public image11: boolean;
    public image12: boolean;
    public image13: boolean;
    public image14: boolean;
    public image15: boolean;
    public image16: boolean;
    public image17: boolean;
    public image18: boolean;
    public image19: boolean;
    public image20: boolean;
    public image21: boolean;
    public image22: boolean;
    public image23: boolean;
    public image24: boolean;
    public image25: boolean;
    public image26: boolean;
    public image27: boolean;
    public image28: boolean;
    public image29: boolean;
    public image30: boolean;

    public sharedSpaces_Kitchen_Refrigerator: string;
    public sharedSpaces_Kitchen_Dishwasher: string;
    public sharedSpaces_Kitchen_Microwave: string;
    public sharedSpaces_Kitchen_Stove: string;
    public sharedSpaces_Kitchen_Oven: string;
    public sharedSpaces_Kitchen_Dishes_Utensils: string;
    public sharedSpaces_Kitchen_Coffee_Maker: string;
    public sharedSpaces_Kitchen_Kettle: string;
    public sharedSpaces_Kitchen_Blender: string;
    public sharedSpaces_Kitchen_Ice_Maker: string;
    public sharedSpaces_Kitchen_Toaster: string;

    public sharedSpaces_Pool_Spa_Spa_Whirlpool: string;
    public sharedSpaces_Pool_Spa_Sauna: string;
    public sharedSpaces_Pool_Spa_Heated_Pool: string;
    public sharedSpaces_Pool_Spa_Indoor_Pool: string;
    public sharedSpaces_Pool_Spa_Outdoor_Pool: string;
    public sharedSpaces_Pool_Spa_Communal_Pool: string;

    public sharedSpaces_Outside_Outdoor_Furniture: string;
    public sharedSpaces_Outside_Beach_Chairs: string;
    public sharedSpaces_Outside_Bicycles: string;
    public sharedSpaces_Outside_Golf: string;
    public sharedSpaces_Outside_Tennis: string;

    public amenities_Towels: string;
    public amenities_Linens: string;
    public amenities_Air_Conditioning: string;
    public amenities_Heating: string;
    public amenities_Fitness_Room_Equipment: string;

    public sharedSpaces_Laundry_Washing_Furniture: string;
    public sharedSpaces_Laundry_Clothes_Dryer: string;



    constructor() {
        this.id = 0;
        this.name = "";
        this.propertyType = "";
        this.propertyPrice = 0;
        this.propertyCountry = "";
        this.propertyCity = "";
        this.propertyState = "";
        this.propertyAddress1 = "";
        this.propertyAddress2 = "";
        this.propertyZipCode = "";
        this.propertyCleaningFee = 0;
        this.theSpace_noOfAccommodation = "";
        this.theSpace_noOfBathrooms = Number(this.bathrooms_noOfMasterBathroom) + Number(this.bathrooms_noOfPrivateBathroom);
        this.theSpace_noOfBedrooms = "";
        this.beds_noOfKing = "";
        this.beds_noOfQueen = "";
        this.beds_noOfSingle = "";
        this.bathrooms_noOfMasterBathroom = "";
        this.bathrooms_noOfPrivateBathroom = "";
        this.bathrooms_noOfHalfBath = "";
        this.sharedSpaces_laundryRoom = "";
        this.sharedSpaces_outDoorParking = "";
        this.sharedSpaces_garage = "";
        this.sharedSpaces_balcony = "";
        this.sharedSpaces_backyard = "";
        this.amenities_wifi = "";
        this.amenities_towelsBedsheetsSoapAndToiletpaper = "";
        this.amenities_shampoo = "";
        this.amenities_closetDrawers = "";
        this.amenities_hairDryer = "";
        this.amenities_LEDTV = "";
        this.amenities_grill = "";
        this.amenities_parking = "";
        this.amenities_outdoorSwimmingPool = "";
        this.amenities_ironBoard = "";
        this.amenities_satelliteOrCable = "";
        this.amenities_boardGames = "";
        this.amenities_Internet = "";
        this.description = "";
        this.image1 = false;
        this.image2 = false;
        this.image3 = false;
        this.image4 = false;
        this.image5 = false;
        this.image6 = false;
        this.image7 = false;
        this.image8 = false;
        this.image9 = false;
        this.image10 = false;
        this.image11 = false;
        this.image12 = false;
        this.image13 = false;
        this.image14 = false;
        this.image15 = false;
        this.image16 = false;
        this.image17 = false;
        this.image18 = false;
        this.image19 = false;
        this.image20 = false;
        this.image21 = false;
        this.image22 = false;
        this.image23 = false;
        this.image24 = false;
        this.image25 = false;
        this.image26 = false;
        this.image27 = false;
        this.image28 = false;
        this.image29 = false;
        this.image30 = false;


        this.sharedSpaces_Kitchen_Refrigerator = "";
        this.sharedSpaces_Kitchen_Dishwasher = "";
        this.sharedSpaces_Kitchen_Microwave = "";
        this.sharedSpaces_Kitchen_Stove = "";
        this.sharedSpaces_Kitchen_Oven = "";
        this.sharedSpaces_Kitchen_Dishes_Utensils = "";
        this.sharedSpaces_Kitchen_Coffee_Maker = "";
        this.sharedSpaces_Kitchen_Kettle = "";
        this.sharedSpaces_Kitchen_Blender = "";
        this.sharedSpaces_Kitchen_Ice_Maker = "";
        this.sharedSpaces_Kitchen_Toaster = "";

        this.sharedSpaces_Pool_Spa_Spa_Whirlpool = "";
        this.sharedSpaces_Pool_Spa_Sauna = "";
        this.sharedSpaces_Pool_Spa_Heated_Pool = "";
        this.sharedSpaces_Pool_Spa_Indoor_Pool = "";
        this.sharedSpaces_Pool_Spa_Outdoor_Pool = "";
        this.sharedSpaces_Pool_Spa_Communal_Pool = "";

        this.sharedSpaces_Outside_Outdoor_Furniture = "";
        this.sharedSpaces_Outside_Beach_Chairs = "";
        this.sharedSpaces_Outside_Bicycles = "";
        this.sharedSpaces_Outside_Golf = "";
        this.sharedSpaces_Outside_Tennis = "";

        this.amenities_Towels = "";
        this.amenities_Linens = "";
        this.amenities_Air_Conditioning = "";
        this.amenities_Heating = "";
        this.amenities_Fitness_Room_Equipment = "";

        this.sharedSpaces_Laundry_Washing_Furniture = "";
        this.sharedSpaces_Laundry_Clothes_Dryer = "";


    }

}

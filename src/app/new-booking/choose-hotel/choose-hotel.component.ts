import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-hotel',
  templateUrl: './choose-hotel.component.html',
  styleUrls: ['./choose-hotel.component.scss']
})
export class ChooseHotelComponent implements OnInit {


  constructor( ){}
  hotellist!:any[];
  
  ngOnInit(): void {

    this.hotellist=[

    
      {
        "resultID": "MzMyNTY3NzMyMDM6MzQ2NTA2OTQ4NTI3NQ--",
        "hwRefNumber": "6995546509",
        "tripTotal": 24.720001,
        "opacity": "RETAIL",
        "selected": false,
        "amenity": [
          {
            "code": "BC",
            "name": "Business center",
            "description": "Guests have access to business equipment and services; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CI",
            "name": "Free internet",
            "description": "Property offers free internet access in all rooms",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "FP",
            "name": "Free parking",
            "description": "Property offers complimentary parking for passenger vehicles.",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "AS",
            "name": "Airport shuttle",
            "description": "Property offers transportation to and from the airport. Shuttles may run during limited hours or require a reservation; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "RE",
            "name": "Restaurant(s)",
            "description": "Property offers at least one restaurant on the premises; hours and days of operation may vary.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CB",
            "name": "Free breakfast",
            "description": "Rates include continental or full breakfast.",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          }
        ],
        "resortFee": false,
        "distanceFromSearchLocation": 6.342556708947252,
        "distanceInfo": "6.3 mi",
        "exactDistanceToHotel": 6.3,
        "charges": {
          "localCurrencyCode": "USD",
          "averagePricePerNight": 22.51,
          "strikeThruPrice": 0,
          "displayPriceType": 0,
          "displayPrice": 22.51,
          "displayPriceLabel": "",
          "strikeThruPriceLabel": "",
          "percentage": null
        },
        "starRating": 3,
        "bestValue": 1.1767956,
        "solutionName": "Balaji Residency",
        "crsNumberOfRoomsLeft": 2,
        "rateType": "REGULAR_RETAIL_RATE",
        "selectedResult": false,
        "hasFreeCancellation": false,
        "neighborhoodId": 93788,
        "superSavingsFlag": false,
        "imageURL": [
          "https://media.expedia.com/lodging/12000000/11480000/11473200/11473177/d3456f86_t.jpg",
          "https://media.expedia.com/lodging/12000000/11480000/11473200/11473177/d3456f86_b.jpg"
        ],
        "summaryOfCharges": {
          "total": 24.72,
          "subTotal": 22.51,
          "dailyRate": 22.51,
          "numberOfNights": 1,
          "extraPersonFees": 0,
          "taxesAndFees": 2.21,
          "resortFeeTotal": 0,
          "totalWithResortFee": 24.72,
          "additionalFeatures": null,
          "resortFee": 0,
          "resortFeeType": ""
        },
        "participatingInSale": false,
        "hasBedTypes": false,
        "hotelLatLong": {
          "latitude": 13.069479999999999,
          "longitude": 80.19870999999999
        },
        "dealAppeal": 0,
        "lodgingTypeCode": "\u0000",
        "partnerHotelId": 11473177,
        "nightFallDeal": false
      },
      {
        "resultID": "MzMyNTY3NzMyMDM6MzQ2NTA2OTQ4NTI3Mw--",
        "hwRefNumber": "6816174179",
        "tripTotal": 81.770004,
        "opacity": "RETAIL",
        "selected": false,
        "amenity": [
          {
            "code": "BC",
            "name": "Business center",
            "description": "Guests have access to business equipment and services; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HP",
            "name": "Accessible parking",
            "description": "Parking available for persons with disabilities",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "FP",
            "name": "Free parking",
            "description": "Property offers complimentary parking for passenger vehicles.",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "AB",
            "name": "Accessible for visually impaired",
            "description": "Braille or raised signage",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AD",
            "name": "Accessible for hearing impaired",
            "description": "TTY for telephone, visual or flashing fire alarm and vibrating alarm clock",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "EL",
            "name": "Elevator/lift",
            "description": "Elevator/lift",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AL",
            "name": "Accessible path of travel",
            "description": "36 inch wide flat or ramped paths from the parking lot to the front desk and from the front desk to guest rooms",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AS",
            "name": "Airport shuttle",
            "description": "Property offers transportation to and from the airport. Shuttles may run during limited hours or require a reservation; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "RE",
            "name": "Restaurant(s)",
            "description": "Property offers at least one restaurant on the premises; hours and days of operation may vary.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AW",
            "name": "Wheelchair accessible",
            "description": "Wheelchair accessible common areas",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "FC",
            "name": "Fitness center",
            "description": "Guests have access to exercise equipment; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PO",
            "name": "Pool(s)",
            "description": "Property offers at least one pool area; hours and dates of operation may be seasonal.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "sanitationAmenity": [
          {
            "code": "PS",
            "name": "Shield in Main Areas - Yes",
            "description": "Shield between guests and staff in main contact areas",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HT",
            "name": "Linens High Temp - Yes",
            "description": "Bed sheets and towels are washed at a temperature of at least 60°C/140°F",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WF",
            "name": "Wrapped Food - Yes",
            "description": "Individually-wrapped food options are available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "SD",
            "name": "Social Distancing - Yes",
            "description": "Social distancing measures are in place",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HZ",
            "name": "Hand Sanitizer Provided - Yes",
            "description": "Guests are provided with free hand sanitizer",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "OB",
            "name": "Brand Sanitize Guide - Yes",
            "description": "Property follows a brand or regulatory agency's sanitization guidelines",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WP",
            "name": "Staff Protective Clothes - Yes",
            "description": "Staff wears personal protective equipment",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "EC",
            "name": "Access via exterior corridors - Yes",
            "description": "Access via exterior corridors",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CD",
            "name": "Disinfectant Used - Yes",
            "description": "Property is cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AG",
            "name": "Guest Protective Clothes - Yes",
            "description": "Protective clothing is available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CL",
            "name": "Contactless CheckIn - Yes",
            "description": "Contactless check-in is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "GP",
            "name": "Turnaround Gap - Yes",
            "description": "Gap period enforced between guest stays",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AM",
            "name": "Enhanced Cleaning - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CU",
            "name": "Contactless CheckOut - Yes",
            "description": "Contactless check-out is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PC",
            "name": "Common Surface Disinfect - Yes",
            "description": "Commonly-touched surfaces are cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TG",
            "name": "Temp Checks Guests - Yes",
            "description": "Temperature checks are available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AZ",
            "name": "Guest Safety - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TP",
            "name": "Temp Checks Staff - Yes",
            "description": "Staff temperature checks are conducted regularly",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "resortFee": false,
        "distanceFromSearchLocation": 6.52590511084358,
        "distanceInfo": "6.5 mi",
        "exactDistanceToHotel": 6.5,
        "charges": {
          "localCurrencyCode": "USD",
          "averagePricePerNight": 68.43,
          "strikeThruPrice": 0,
          "displayPriceType": 0,
          "displayPrice": 68.43,
          "displayPriceLabel": "",
          "strikeThruPriceLabel": "",
          "percentage": null
        },
        "starRating": 5,
        "bestValue": 1.2529413,
        "solutionName": "Crowne Plaza Chennai Adyar Park, an IHG Hotel",
        "crsNumberOfRoomsLeft": 9,
        "rateType": "REGULAR_RETAIL_RATE",
        "selectedResult": false,
        "hasFreeCancellation": false,
        "neighborhoodId": 93788,
        "superSavingsFlag": false,
        "imageURL": [
          "https://media.expedia.com/lodging/1000000/20000/16600/16559/37f7086e_t.jpg",
          "https://media.expedia.com/lodging/1000000/20000/16600/16559/37f7086e_b.jpg"
        ],
        "summaryOfCharges": {
          "total": 81.77,
          "subTotal": 68.43,
          "dailyRate": 68.43,
          "numberOfNights": 1,
          "extraPersonFees": 0,
          "taxesAndFees": 13.34,
          "resortFeeTotal": 0,
          "totalWithResortFee": 81.77,
          "additionalFeatures": null,
          "resortFee": 0,
          "resortFeeType": ""
        },
        "participatingInSale": false,
        "hasBedTypes": false,
        "expediaAverageOverallSatisfaction": 4.2,
        "expediaPercentRecommended": 83,
        "expediaReviewCount": 79,
        "hotelLatLong": {
          "latitude": 13.029083,
          "longitude": 80.249918
        },
        "dealAppeal": 0,
        "lodgingTypeCode": "\u0000",
        "partnerHotelId": 16559,
        "nightFallDeal": false
      },{
        "resultID": "MzMyNTY3NzMyMDM6MzQ2NTA2OTQ4NTI4Mw--",
        "hwRefNumber": "6601141847",
        "tripTotal": 87.2,
        "opacity": "RETAIL",
        "selected": false,
        "amenity": [
          {
            "code": "BC",
            "name": "Business center",
            "description": "Guests have access to business equipment and services; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HP",
            "name": "Accessible parking",
            "description": "Parking available for persons with disabilities",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "FP",
            "name": "Free parking",
            "description": "Property offers complimentary parking for passenger vehicles.",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "SR",
            "name": "Smoke-free rooms",
            "description": "Guest rooms at this hotel are always smoke free.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CI",
            "name": "Free internet",
            "description": "Property offers free internet access in all rooms",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "EL",
            "name": "Elevator/lift",
            "description": "Elevator/lift",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AL",
            "name": "Accessible path of travel",
            "description": "36 inch wide flat or ramped paths from the parking lot to the front desk and from the front desk to guest rooms",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AS",
            "name": "Airport shuttle",
            "description": "Property offers transportation to and from the airport. Shuttles may run during limited hours or require a reservation; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "RE",
            "name": "Restaurant(s)",
            "description": "Property offers at least one restaurant on the premises; hours and days of operation may vary.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AW",
            "name": "Wheelchair accessible",
            "description": "Wheelchair accessible common areas",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PO",
            "name": "Pool(s)",
            "description": "Property offers at least one pool area; hours and dates of operation may be seasonal.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "sanitationAmenity": [
          {
            "code": "PS",
            "name": "Shield in Main Areas - Yes",
            "description": "Shield between guests and staff in main contact areas",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HT",
            "name": "Linens High Temp - Yes",
            "description": "Bed sheets and towels are washed at a temperature of at least 60°C/140°F",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "C2",
            "name": "Contactless CheckIn - No",
            "description": "Contactless check-in is not available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": true
          },
          {
            "code": "WF",
            "name": "Wrapped Food - Yes",
            "description": "Individually-wrapped food options are available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "C3",
            "name": "Contactless CheckOut - No",
            "description": "Contactless check-out is not available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": true
          },
          {
            "code": "SD",
            "name": "Social Distancing - Yes",
            "description": "Social distancing measures are in place",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HZ",
            "name": "Hand Sanitizer Provided - Yes",
            "description": "Guests are provided with free hand sanitizer",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "OB",
            "name": "Brand Sanitize Guide - Yes",
            "description": "Property follows a brand or regulatory agency's sanitization guidelines",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WP",
            "name": "Staff Protective Clothes - Yes",
            "description": "Staff wears personal protective equipment",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CD",
            "name": "Disinfectant Used - Yes",
            "description": "Property is cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "freebie": false,
            "negative": false
          },
          {
            "code": "OB",
            "name": "Brand Sanitize Guide - Yes",
            "description": "Property follows a brand or regulatory agency's sanitization guidelines",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WP",
            "name": "Staff Protective Clothes - Yes",
            "description": "Staff wears personal protective equipment",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CD",
            "name": "Disinfectant Used - Yes",
            "description": "Property is cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AG",
            "name": "Guest Protective Clothes - Yes",
            "description": "Protective clothing is available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CL",
            "name": "Contactless CheckIn - Yes",
            "description": "Contactless check-in is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AM",
            "name": "Enhanced Cleaning - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CU",
            "name": "Contactless CheckOut - Yes",
            "description": "Contactless check-out is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PC",
            "name": "Common Surface Disinfect - Yes",
            "description": "Commonly-touched surfaces are cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TG",
            "name": "Temp Checks Guests - Yes",
            "description": "Temperature checks are available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AZ",
            "name": "Guest Safety - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TP",
            "name": "Temp Checks Staff - Yes",
            "description": "Staff temperature checks are conducted regularly",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "resortFee": false,
        "distanceFromSearchLocation": 4.347348578192157,
        "distanceInfo": "4.3 mi",
        "exactDistanceToHotel": 4.3,
        "charges": {
          "localCurrencyCode": "USD",
          "averagePricePerNight": 109.49,
          "strikeThruPrice": 0,
          "displayPriceType": 0,
          "displayPrice": 109.49,
          "displayPriceLabel": "",
          "strikeThruPriceLabel": "",
          "percentage": null
        },
        "starRating": 5,
        "bestValue": 6.8709674,
        "solutionName": "Park Hyatt Chennai",
        "crsNumberOfRoomsLeft": 30,
        "rateType": "REGULAR_RETAIL_RATE",
        "selectedResult": false,
        "hasFreeCancellation": true,
        "freeCancellationTimeStamp": "2023-04-07T11:29:00",
        "neighborhoodId": 93788,
        "superSavingsFlag": false,
        "imageURL": [
          "https://media.expedia.com/lodging/6000000/5100000/5098500/5098424/7fe49cfc_t.jpg",
          "https://media.expedia.com/lodging/6000000/5100000/5098500/5098424/7fe49cfc_b.jpg"
        ],
        "summaryOfCharges": {
          "total": 126.34,
          "subTotal": 109.49,
          "dailyRate": 109.49,
          "numberOfNights": 1,
          "extraPersonFees": 0,
          "taxesAndFees": 16.85,
          "resortFeeTotal": 0,
          "totalWithResortFee": 126.34,
          "additionalFeatures": null,
          "resortFee": 0,
          "resortFeeType": ""
        },
        "participatingInSale": false,
        "hasBedTypes": false,
        "expediaAverageOverallSatisfaction": 4.6,
        "expediaPercentRecommended": 91,
        "expediaReviewCount": 284,
        "hotelLatLong": {
          "latitude": 13.0107,
          "longitude": 80.22322
        },
        "dealAppeal": 0,
        "lodgingTypeCode": "\u0000",
        "partnerHotelId": 5098424,
        "nightFallDeal": false
      },
      {
        "resultID": "MzMyNTY3NzMyMDM6MzQ2NTA2OTQ4NTI2Mg--",
        "hwRefNumber": "6609040139",
        "tripTotal": 88.67,
        "opacity": "RETAIL",
        "selected": false,
        "amenity": [
          {
            "code": "BC",
            "name": "Business center",
            "description": "Guests have access to business equipment and services; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HP",
            "name": "Accessible parking",
            "description": "Parking available for persons with disabilities",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "FP",
            "name": "Free parking",
            "description": "Property offers complimentary parking for passenger vehicles.",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "SR",
            "name": "Smoke-free rooms",
            "description": "Guest rooms at this hotel are always smoke free.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AB",
            "name": "Accessible for visually impaired",
            "description": "Braille or raised signage",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CI",
            "name": "Free internet",
            "description": "Property offers free internet access in all rooms",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "EL",
            "name": "Elevator/lift",
            "description": "Elevator/lift",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AL",
            "name": "Accessible path of travel",
            "description": "36 inch wide flat or ramped paths from the parking lot to the front desk and from the front desk to guest rooms",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AS",
            "name": "Airport shuttle",
            "description": "Property offers transportation to and from the airport. Shuttles may run during limited hours or require a reservation; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "RE",
            "name": "Restaurant(s)",
            "description": "Property offers at least one restaurant on the premises; hours and days of operation may vary.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AW",
            "name": "Wheelchair accessible",
            "description": "Wheelchair accessible common areas",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PO",
            "name": "Pool(s)",
            "description": "Property offers at least one pool area; hours and dates of operation may be seasonal.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "sanitationAmenity": [
          {
            "code": "PS",
            "name": "Shield in Main Areas - Yes",
            "description": "Shield between guests and staff in main contact areas",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HT",
            "name": "Linens High Temp - Yes",
            "description": "Bed sheets and towels are washed at a temperature of at least 60°C/140°F",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WF",
            "name": "Wrapped Food - Yes",
            "description": "Individually-wrapped food options are available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "A1",
            "name": "Guest Protective Clothes - No",
            "description": "Protective clothing is not available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": true
          },
          {
            "code": "SD",
            "name": "Social Distancing - Yes",
            "description": "Social distancing measures are in place",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HZ",
            "name": "Hand Sanitizer Provided - Yes",
            "description": "Guests are provided with free hand sanitizer",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WP",
            "name": "Staff Protective Clothes - Yes",
            "description": "Staff wears personal protective equipment",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CD",
            "name": "Disinfectant Used - Yes",
            "description": "Property is cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CL",
            "name": "Contactless CheckIn - Yes",
            "description": "Contactless check-in is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "GP",
            "name": "Turnaround Gap - Yes",
            "description": "Gap period enforced between guest stays",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AM",
            "name": "Enhanced Cleaning - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CU",
            "name": "Contactless CheckOut - Yes",
            "description": "Contactless check-out is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PC",
            "name": "Common Surface Disinfect - Yes",
            "description": "Commonly-touched surfaces are cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TG",
            "name": "Temp Checks Guests - Yes",
            "description": "Temperature checks are available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AZ",
            "name": "Guest Safety - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TP",
            "name": "Temp Checks Staff - Yes",
            "description": "Staff temperature checks are conducted regularly",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "resortFee": false,
        "distanceFromSearchLocation": 6.356930596286415,
        "distanceInfo": "6.3 mi",
        "exactDistanceToHotel": 6.4,
        "charges": {
          "localCurrencyCode": "USD",
          "averagePricePerNight": 79.07,
          "strikeThruPrice": 0,
          "displayPriceType": 0,
          "displayPrice": 79.07,
          "displayPriceLabel": "",
          "strikeThruPriceLabel": "",
          "percentage": null
        },
        "starRating": 4.5,
        "bestValue": 1.8849556,
        "solutionName": "The Raintree Hotel, Anna Salai",
        "crsNumberOfRoomsLeft": 4,
        "rateType": "REGULAR_RETAIL_RATE",
        "selectedResult": false,
        "hasFreeCancellation": true,
        "freeCancellationTimeStamp": "2023-04-05T23:29:00",
        "neighborhoodId": 93788,
        "superSavingsFlag": false,
        "imageURL": [
          "https://media.expedia.com/lodging/4000000/3870000/3860400/3860321/77dfc145_t.jpg",
          "https://media.expedia.com/lodging/4000000/3870000/3860400/3860321/77dfc145_b.jpg"
        ],
        "summaryOfCharges": {
          "total": 88.67,
          "subTotal": 79.07,
          "dailyRate": 79.07,
          "numberOfNights": 1,
          "extraPersonFees": 0,
          "taxesAndFees": 9.6,
          "resortFeeTotal": 0,
          "totalWithResortFee": 88.67,
          "additionalFeatures": null,
          "resortFee": 0,
          "resortFeeType": ""
        },
        "participatingInSale": false,
        "hasBedTypes": false,
        "expediaAverageOverallSatisfaction": 4.4,
        "expediaPercentRecommended": 90,
        "expediaReviewCount": 570,
        "hotelLatLong": {
          "latitude": 13.033719999999999,
          "longitude": 80.24417
        },
        "dealAppeal": 0,
        "lodgingTypeCode": "\u0000",
        "partnerHotelId": 3860321,
        "nightFallDeal": false
      },
      {
        "resultID": "MzMyNTY3NzMyMDM6MzQ2NTA2OTQ4NTMwMw--",
        "hwRefNumber": "6306760063",
        "tripTotal": 126.34,
        "opacity": "RETAIL",
        "selected": false,
        "amenity": [
          {
            "code": "BC",
            "name": "Business center",
            "description": "Guests have access to business equipment and services; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HP",
            "name": "Accessible parking",
            "description": "Parking available for persons with disabilities",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "FP",
            "name": "Free parking",
            "description": "Property offers complimentary parking for passenger vehicles.",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "CI",
            "name": "Free internet",
            "description": "Property offers free internet access in all rooms",
            "accessibilityOption": false,
            "freebie": true,
            "negative": false
          },
          {
            "code": "EL",
            "name": "Elevator/lift",
            "description": "Elevator/lift",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AL",
            "name": "Accessible path of travel",
            "description": "36 inch wide flat or ramped paths from the parking lot to the front desk and from the front desk to guest rooms",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AS",
            "name": "Airport shuttle",
            "description": "Property offers transportation to and from the airport. Shuttles may run during limited hours or require a reservation; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "RE",
            "name": "Restaurant(s)",
            "description": "Property offers at least one restaurant on the premises; hours and days of operation may vary.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PE",
            "name": "Pet friendly",
            "description": "Pet friendly - terms apply",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AW",
            "name": "Wheelchair accessible",
            "description": "Wheelchair accessible common areas",
            "accessibilityOption": true,
            "freebie": false,
            "negative": false
          },
          {
            "code": "FC",
            "name": "Fitness center",
            "description": "Guests have access to exercise equipment; an additional charge may apply.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PO",
            "name": "Pool(s)",
            "description": "Property offers at least one pool area; hours and dates of operation may be seasonal.",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "sanitationAmenity": [
          {
            "code": "PS",
            "name": "Shield in Main Areas - Yes",
            "description": "Shield between guests and staff in main contact areas",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "G1",
            "name": "Turnaround Gap - No",
            "description": "No gap period between guest stays",
            "accessibilityOption": false,
            "freebie": false,
            "negative": true
          },
          {
            "code": "HT",
            "name": "Linens High Temp - Yes",
            "description": "Bed sheets and towels are washed at a temperature of at least 60°C/140°F",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WF",
            "name": "Wrapped Food - Yes",
            "description": "Individually-wrapped food options are available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "SD",
            "name": "Social Distancing - Yes",
            "description": "Social distancing measures are in place",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "HZ",
            "name": "Hand Sanitizer Provided - Yes",
            "description": "Guests are provided with free hand sanitizer",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "OB",
            "name": "Brand Sanitize Guide - Yes",
            "description": "Property follows a brand or regulatory agency's sanitization guidelines",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "WP",
            "name": "Staff Protective Clothes - Yes",
            "description": "Staff wears personal protective equipment",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CD",
            "name": "Disinfectant Used - Yes",
            "description": "Property is cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AG",
            "name": "Guest Protective Clothes - Yes",
            "description": "Protective clothing is available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CL",
            "name": "Contactless CheckIn - Yes",
            "description": "Contactless check-in is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AM",
            "name": "Enhanced Cleaning - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "CU",
            "name": "Contactless CheckOut - Yes",
            "description": "Contactless check-out is available",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "PC",
            "name": "Common Surface Disinfect - Yes",
            "description": "Commonly-touched surfaces are cleaned with disinfectant",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TG",
            "name": "Temp Checks Guests - Yes",
            "description": "Temperature checks are available to guests",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "AZ",
            "name": "Guest Safety - Yes",
            "description": "This hotel has implemented new health and safety measures due to COVID-19",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          },
          {
            "code": "TP",
            "name": "Temp Checks Staff - Yes",
            "description": "Staff temperature checks are conducted regularly",
            "accessibilityOption": false,
            "freebie": false,
            "negative": false
          }
        ],
        "resortFee": false,
        "distanceFromSearchLocation": 4.347348578192157,
        "distanceInfo": "4.3 mi",
        "exactDistanceToHotel": 4.3,
        "charges": {
          "localCurrencyCode": "USD",
          "averagePricePerNight": 109.49,
          "strikeThruPrice": 0,
          "displayPriceType": 0,
          "displayPrice": 109.49,
          "displayPriceLabel": "",
          "strikeThruPriceLabel": "",
          "percentage": null
        },
        "starRating": 5,
        "bestValue": 6.8709674,
        "solutionName": "Park Hyatt Chennai",
        "crsNumberOfRoomsLeft": 30,
        "rateType": "REGULAR_RETAIL_RATE",
        "selectedResult": false,
        "hasFreeCancellation": true,
        "freeCancellationTimeStamp": "2023-04-07T11:29:00",
        "neighborhoodId": 93788,
        "superSavingsFlag": false,
        "imageURL": [
          "https://media.expedia.com/lodging/6000000/5100000/5098500/5098424/7fe49cfc_t.jpg",
          "https://media.expedia.com/lodging/6000000/5100000/5098500/5098424/7fe49cfc_b.jpg"
        ],
        "summaryOfCharges": {
          "total": 126.34,
          "subTotal": 109.49,
          "dailyRate": 109.49,
          "numberOfNights": 1,
          "extraPersonFees": 0,
          "taxesAndFees": 16.85,
          "resortFeeTotal": 0,
          "totalWithResortFee": 126.34,
          "additionalFeatures": null,
          "resortFee": 0,
          "resortFeeType": ""
        },
        "participatingInSale": false,
        "hasBedTypes": false,
        "expediaAverageOverallSatisfaction": 4.6,
        "expediaPercentRecommended": 91,
        "expediaReviewCount": 284,
        "hotelLatLong": {
          "latitude": 13.0107,
          "longitude": 80.22322
        },
        "dealAppeal": 0,
        "lodgingTypeCode": "\u0000",
        "partnerHotelId": 5098424,
        "nightFallDeal": false
      }
      
       
      
    ] 
}
    
}

  

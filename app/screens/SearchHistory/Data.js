import { Images } from "@config";

export const dataSetTransportProducts = [
    // {
    //     image: undefined, text: 'TRAILSTAR', navigateTo: 'ProductDeatilInfo',
    //     data: [
    //         {
    //             image: undefined, text: 'TRAILSTAR', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
    //             data: { image: undefined, text: ['PRODUKT PROSPEKT »TRAILSTAR«'], videoId: "9RM0QLDti1A", otherData: { image: undefined, text: ['QUICKGUIDE ZUM »TRAILSTAR«'], videoId: "9RM0QLDti1A", } }
    //         },
    //     ]
    // },
    {
        image: Images.banner4, text: 'SOFORT VERFÜGBAR',navigateTo: 'ProductDeatilInfo',
        searchText: "SOFORT VERFÜGBAR TU I TU-L QUICKGUIDE ZUM TU I TU-L TN-L QUICKGUIDE ZUM TN-L'",
        data: [
          {
            image: Images.banner1, text: 'LAGERFAHRZEUGE', listTransport: true,
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/lagerfahrzeuge'
  
          },
          {
            image: Images.banner94, text: 'GEBRAUCHTFAHRZEUGE',
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/gebrauchtfahrzeuge'
  
          }]
      },

    {
        image: Images.banner1, text: 'SATTELANHÄNGER', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } }
                ]
            },
            {
                image: Images.banner18, text: 'SEMIAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'] } } }

                ],
                listTransport: true,

            },
            {
                image: Images.banner10, text: 'TIEFBETTAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } }

                ],
                listTransport: true,

            }



        ]
    },
    {
        image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } }
        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } },

    {
        image: Images.banner18, text: 'SEMIAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'] } } }

        ],
        listTransport: true,

    },

    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'] } } },

    {
        image: Images.banner10, text: 'TIEFBETTAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } },



    {
        image: Images.banner2, text: 'SCHWERLASTMODULE', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner40, text: 'GEZOGEN', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } }

                ]
            },
            {
                image: Images.banner41, text: 'ANGETRIEBEN', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } }

                ],
                listTransport: true,

            },



        ]
    },


    {
        image: Images.banner40, text: 'GEZOGEN', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } }

        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } },
    {
        image: Images.banner41, text: 'ANGETRIEBEN', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } },








    {
        image: Images.banner3, text: 'SPEZIALANWENDUNGEN',
        navigateTo: 'ProductDeatilInfo',
        data: [

            {
                image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550',  "DATENBLÄTTER FTV 550"], otherData: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'] }, videoId: "9RM0QLDti1A", }
            },
            {
                image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
                data: {
                    image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], otherData: { image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
                },

            },
            {
                image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", } },

            },
            {
                image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner72, text: ['QQUICKGUIDE ZUM »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

            },
            {
                image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A" } }
            },



        ]
    },

    {
        image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550', "DATENBLÄTTER FTV 550"], otherData: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'] }, videoId: "9RM0QLDti1A", }
    },
    {
        image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
        data: {
            image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], otherData: { image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
        },

    },
    {
        image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", } },

    },
    {
        image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner72, text: ['QQUICKGUIDE ZUM »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

    },
    {
        image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A" } }
    },

]

export const dataSetTransportService = [
    // {
    //     image: undefined, text: 'TRAILSTAR', navigateTo: 'ProductDeatilInfo',
    //     data: [
    //         {
    //             image: undefined, text: 'TRAILSTAR', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
    //             data: { image: undefined, text: ['QUICKGUIDE ZUM »TRAILSTAR«'], videoId: "9RM0QLDti1A", 
    //             otherData: { image: undefined, text: ['PRODUKT PROSPEKT »TRAILSTAR«'], videoId: "9RM0QLDti1A", } }
    //         },
    //     ]
    // },
    {
        image: Images.banner4, text: 'SOFORT VERFÜGBAR',navigateTo: 'ProductDeatilInfo',
        searchText: "SOFORT VERFÜGBAR TU I TU-L QUICKGUIDE ZUM TU I TU-L TN-L QUICKGUIDE ZUM TN-L'",
        data: [
          {
            image: Images.banner1, text: 'LAGERFAHRZEUGE', listTransport: true,
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/lagerfahrzeuge'
  
          },
          {
            image: Images.banner94, text: 'GEBRAUCHTFAHRZEUGE',
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/gebrauchtfahrzeuge'
  
          }]
      },

    {
        image: Images.banner1, text: 'SATTELANHÄNGER', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } }
                ]
            },
            {
                image: Images.banner18, text: 'SEMIAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT »ARCUS« P | »ARCUS« PK'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'] } } }

                ],
                listTransport: true,

            },
            {
                image: Images.banner10, text: 'TIEFBETTAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } }

                ],
                listTransport: true,

            }



        ]
    },
    {
        image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } }
        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } },

    {
        image: Images.banner18, text: 'SEMIAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'] } } }

        ],
        listTransport: true,

    },

    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'] } } },

    {
        image: Images.banner10, text: 'TIEFBETTAUFLIEGER', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } },



    {
        image: Images.banner2, text: 'SCHWERLASTMODULE', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner40, text: 'GEZOGEN', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } }

                ]
            },
            {
                image: Images.banner41, text: 'ANGETRIEBEN', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } }

                ],
                listTransport: true,

            },



        ]
    },


    {
        image: Images.banner40, text: 'GEZOGEN', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } }

        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } },
    {
        image: Images.banner41, text: 'ANGETRIEBEN', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } },








    {
        image: Images.banner3, text: 'SPEZIALANWENDUNGEN',
        navigateTo: 'ProductDeatilInfo',
        data: [

            {
                image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'], 
                otherData: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550'] }, videoId: "9RM0QLDti1A", }
            },
            {
                image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
                data: {
                    image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], 
                    otherData: { image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
                },

            },
            {
                image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", 
                otherData: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", 
                otherData: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", } },

            },
            {
                image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", 
                otherData: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", 
                otherData: { image: Images.banner72, text: ['PRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

            },
            {
                image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A", 
                otherData: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A" } }
            },



        ]
    },

    {
        image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'], 
        otherData: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550', "DATENBLÄTTER FTV 550"] }, videoId: "9RM0QLDti1A", }
    },
    {
        image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
        data: {
            image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], 
            otherData: { image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
        },

    },
    {
        image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", 
        otherData: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", 
        otherData: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", } },

    },
    {
        image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", 
        otherData: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", 
        otherData: { image: Images.banner72, text: ['PRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

    },
    {
        image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A", 
        otherData: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A" } }
    },

]

export const dataSetAirportProducts = [
    {
        image: Images.banner13, text: 'FRACHT-/PUSHBACKSCHLEPPER', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: {
                    image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D",]
                    , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
                }
            },
            {
                image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: {
                    image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',]
                    , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] }

                }
            }
        ]
    },


    {
        image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D",]
            , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
        }
    },
    {
        image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',]
            , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] }

        }
    },



    {
        image: Images.banner8, text: 'KONVENTIONELLE SCHLEPPER', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"], otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',], otherData: {
                        image: Images.banner78, videoId: "eP_YC0cr0n0",
                        text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"],
                    }
                }
            }]
    },
    {
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"], otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',], otherData: {
                image: Images.banner78, videoId: "eP_YC0cr0n0",
                text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"],
            }
        }
    },
    {
        image: Images.banner7, text: 'STANGENLOSE SCHLEPPER', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"], otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',], otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',], otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"] } }
            }
        ]
    },
    {
        image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"], otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',], otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',], otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner6, text: 'FLUGZEUGBERGESYSTEME', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"], otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',], otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT"] } }
            }]
    },
    {
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"], otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',], otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner5, text: 'PARTNER', disabled: true, navigateTo: 'ProductDeatilInfo',

    }

]

export const dataSetAirportService = [
    {
        image: Images.banner13, text: 'FRACHT-/PUSHBACKSCHLEPPER', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D","SERVICE PROSPEKT"]
                    , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", ] }
                }
            },
            {
                image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT' ]
                    , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] }

                }
            }
        ]
    },


    {
        image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"]
            , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D"] }
        }
    },
    {
        image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', "SERVICE PROSPEKT"]
            , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', ] }

        }
    },



    {
        image: Images.banner8, text: 'KONVENTIONELLE SCHLEPPER', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"],
                 otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE",  ] } }
            },
            {
                image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"], otherData: {
                        image: Images.banner78, videoId: "eP_YC0cr0n0",
                        text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',  ],
                    }
                }
            }]
    },
    {
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"], 
        otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE",  ] } }
    },
    {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"], otherData: {
                image: Images.banner78, videoId: "eP_YC0cr0n0",
                text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',],
            }
        }
    },
    {
        image: Images.banner7, text: 'STANGENLOSE SCHLEPPER', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"],
                 otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", ] } }
            },
            {
                image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "SERVICE PROSPEKT"],
                 otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT",  ] } }
            },
            {
                image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"], 
                otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',  ] } }
            }
        ]
    },
    {
        image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"],
         otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", ] } }
    },
    {
        image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "SERVICE PROSPEKT",],
         otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", ] } }
    },
    {
        image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT",], 
        otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',  ] } }
    },
    {
        image: Images.banner6, text: 'FLUGZEUGBERGESYSTEME', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"], 
                otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN",  ] } }
            },
            {
                image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT",],
                 otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', ] } }
            }]
    },
    {
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"], 
        otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN",  ] } }
    },
    {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT",],
         otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',  ] } }
    },
    {
        image: Images.banner5, text: 'PARTNER', disabled: true, navigateTo: 'ProductDeatilInfo',

    }

]

export const dataSetTransportProductsEnglish = [
    // {
    //     image: undefined, text: 'TRAILSTAR', navigateTo: 'ProductDeatilInfo',
    //     data: [
    //         {
    //             image: undefined, text: 'TRAILSTAR', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
    //             data: { image: undefined, text: ['PRODUKT PROSPEKT »TRAILSTAR«'], videoId: "9RM0QLDti1A", otherData: { image: undefined, text: ['QUICKGUIDE ZUM »TRAILSTAR«'], videoId: "9RM0QLDti1A", } }
    //         },
    //     ]
    // },
    {
        image: Images.banner4, text: 'IMMEDIATELY AVAILABLE',navigateTo: 'ProductDeatilInfo',
        searchText: "IMMEDIATELY AVAILABLE TU I TU-L QUICKGUIDE ZUM TU I TU-L TN-L QUICKGUIDE ZUM TN-L'",
        data: [
          {
            image: Images.banner1, text: 'LAGERFAHRZEUGE', listTransport: true,
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/lagerfahrzeuge'
  
          },
          {
            image: Images.banner94, text: 'GEBRAUCHTFAHRZEUGE',
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/gebrauchtfahrzeuge'
  
          }]
      },

    {
        image: Images.banner1, text: 'SEMI-TRAILERS', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner16, text: 'FLATBED SEMI-TRAILERS', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } }
                ]
            },
            {
                image: Images.banner18, text: 'SEMI LOWLOADERS', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« WITH WHEEL RECESS', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« WITH WHEEL RECESS'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« WITH WHEEL RECESS'] } } }

                ],
                listTransport: true,

            },
            {
                image: Images.banner10, text: 'LOWLOADER TRAILERS', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } }

                ],
                listTransport: true,

            }



        ]
    },
    {
        image: Images.banner16, text: 'FLATBED SEMI-TRAILERS', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } }
        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } },

    {
        image: Images.banner18, text: 'SEMI LOWLOADERS', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« WITH WHEEL RECESS', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« WITH WHEEL RECESS'] } } }

        ],
        listTransport: true,

    },

    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« WITH WHEEL RECESS', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« WITH WHEEL RECESS'] } } },

    {
        image: Images.banner10, text: 'LOWLOADER TRAILERS', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } },



    {
        image: Images.banner2, text: 'HEAVY-DUTY MODULES', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner40, text: 'TOWED', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } }

                ]
            },
            {
                image: Images.banner41, text: 'SELF-PROPELLED', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } }

                ],
                listTransport: true,

            },



        ]
    },


    {
        image: Images.banner40, text: 'TOWED', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } }

        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } },
    {
        image: Images.banner41, text: 'SELF-PROPELLED', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } },








    {
        image: Images.banner3, text: 'SPECIAL APPLICATIONS',
        navigateTo: 'ProductDeatilInfo',
        data: [

            {
                image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550', "DATENBLÄTTER FTV 550"], otherData: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'] }, videoId: "9RM0QLDti1A", }
            },
            {
                image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
                data: {
                    image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], otherData: { image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
                },

            },
            {
                image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", } },

            },
            {
                image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner72, text: ['QQUICKGUIDE ZUM »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

            },
            {
                image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A" } }
            },



        ]
    },

    {
        image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550', "DATENBLÄTTER FTV 550"], otherData: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'] }, videoId: "9RM0QLDti1A", }
    },
    {
        image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
        data: {
            image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], otherData: { image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
        },

    },
    {
        image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", } },

    },
    {
        image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner72, text: ['QQUICKGUIDE ZUM »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

    },
    {
        image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A" } }
    },

]

export const dataSetTransportServiceEnglish = [
    // {
    //     image: undefined, text: 'TRAILSTAR', navigateTo: 'ProductDeatilInfo',
    //     data: [
    //         {
    //             image: undefined, text: 'TRAILSTAR', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
    //             data: { image: undefined, text: ['QUICKGUIDE ZUM »TRAILSTAR«'], videoId: "9RM0QLDti1A", 
    //             otherData: { image: undefined, text: ['PRODUKT PROSPEKT »TRAILSTAR«'], videoId: "9RM0QLDti1A", } }
    //         },
    //     ]
    // },
    {
        image: Images.banner4, text: 'IMMEDIATELY AVAILABLE',navigateTo: 'ProductDeatilInfo',
        searchText: "IMMEDIATELY AVAILABLE TU I TU-L QUICKGUIDE ZUM TU I TU-L TN-L QUICKGUIDE ZUM TN-L'",
        data: [
          {
            image: Images.banner1, text: 'LAGERFAHRZEUGE', listTransport: true,
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/lagerfahrzeuge'
  
          },
          {
            image: Images.banner94, text: 'GEBRAUCHTFAHRZEUGE',
            data: [], listTransport: true,
            linking: 'https://www.goldhofer.com/gebrauchtfahrzeuge'
  
          }]
      },

    {
        image: Images.banner1, text: 'SEMI-TRAILERS', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner16, text: 'FLATBED SEMI-TRAILERS', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } }
                ]
            },
            {
                image: Images.banner18, text: 'SEMI LOWLOADERS', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT »ARCUS« P | »ARCUS« PK'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« WITH WHEEL RECESS', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« WITH WHEEL RECESS'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« WITH WHEEL RECESS'] } } }

                ],
                listTransport: true,

            },
            {
                image: Images.banner10, text: 'LOWLOADER TRAILERS', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } }

                ],
                listTransport: true,

            }



        ]
    },
    {
        image: Images.banner16, text: 'FLATBED SEMI-TRAILERS', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } }
        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } },

    {
        image: Images.banner18, text: 'SEMI LOWLOADERS', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« WITH WHEEL RECESS', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« WITH WHEEL RECESS'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« WITH WHEEL RECESS'] } } }

        ],
        listTransport: true,

    },

    { navigateTo: 'ProductDeatilVideo', image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner27, text: 'STZ-L | »MPA« WITH WHEEL RECESS', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« WITH WHEEL RECESS'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« WITH WHEEL RECESS'] } } },

    {
        image: Images.banner10, text: 'LOWLOADER TRAILERS', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } },



    {
        image: Images.banner2, text: 'HEAVY-DUTY MODULES', navigateTo: 'ProductDeatilInfo',
        data: [
            {
                image: Images.banner40, text: 'TOWED', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } }

                ]
            },
            {
                image: Images.banner41, text: 'SELF-PROPELLED', navigateTo: 'ProductDeatilMoreInfo',
                data: [
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
                    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], 
                    otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } }

                ],
                listTransport: true,

            },



        ]
    },


    {
        image: Images.banner40, text: 'TOWED', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } }

        ]
    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } },
    {
        image: Images.banner41, text: 'SELF-PROPELLED', navigateTo: 'ProductDeatilMoreInfo',
        data: [
            { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
            { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], 
            otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } }

        ],
        listTransport: true,

    },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
    { navigateTo: 'ProductDeatilVideo', image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], 
    otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } },








    {
        image: Images.banner3, text: 'SPECIAL APPLICATIONS',
        navigateTo: 'ProductDeatilInfo',
        data: [

            {
                image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'], 
                otherData: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550', "DATENBLÄTTER FTV 550"] }, videoId: "9RM0QLDti1A", }
            },
            {
                image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
                data: {
                    image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], 
                    otherData: { image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
                },

            },
            {
                image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", 
                otherData: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", 
                otherData: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", } },

            },
            {
                image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", 
                otherData: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", } }
            },
            {
                image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", 
                otherData: { image: Images.banner72, text: ['PRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

            },
            {
                image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
                data: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A", 
                otherData: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A" } }
            },



        ]
    },

    {
        image: Images.banner61, text: 'FTV 550', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'], 
        otherData: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550', "DATENBLÄTTER FTV 550"] }, videoId: "9RM0QLDti1A", }
    },
    {
        image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', navigateTo: 'ProductDeatilMoreInfo',
        data: {
            image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], 
            otherData: { image: Images.banner64, text: ['DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
        },

    },
    {
        image: Images.banner65, text: 'RA 2', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", 
        otherData: { image: Images.banner66, text: ['DATENBLÄTTER RA 2'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner67, text: 'RA 3', navigateTo: 'ProductDeatilMoreInfo', data: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", 
        otherData: { image: Images.banner68, text: ['DATENBLÄTTER RA 3'], videoId: "eP_YC0cr0n0", } },

    },
    {
        image: Images.banner69, text: 'RA 4', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", 
        otherData: { image: Images.banner70, text: ['DATENBLÄTTER RA 4'], videoId: "9RM0QLDti1A", } }
    },
    {
        image: Images.banner71, text: '»BLADEX«', navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", 
        otherData: { image: Images.banner72, text: ['PRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

    },
    {
        image: Images.banner73, text: '»BLADES«', listTransport: true, navigateTo: 'ProductDeatilMoreInfo',
        data: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A", 
        otherData: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A" } }
    },

]

export const dataSetAirportProductsEnglish = [
    {
        image: Images.banner13, text: 'CARGO & PUSHBACK TRACTORS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D",]
                    , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
                }
            },
            {
                image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',]
                    , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] }

                }
            }
        ]
    },


    {
        image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D",]
            , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
        }
    },
    {
        image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',]
            , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] }

        }
    },



    {
        image: Images.banner8, text: 'CONVENTIONAL TRACTORS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"], otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',], otherData: {
                        image: Images.banner78, videoId: "eP_YC0cr0n0",
                        text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"],
                    }
                }
            }]
    },
    {
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"], otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',], otherData: {
                image: Images.banner78, videoId: "eP_YC0cr0n0",
                text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"],
            }
        }
    },
    {
        image: Images.banner7, text: 'TOWBARLESS TRACTORS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"], otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',], otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',], otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"] } }
            }
        ]
    },
    {
        image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"], otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',], otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',], otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner6, text: 'AIRCRAFT RECOVERY TRANSPORT SYSTEMS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"], otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"] } }
            },
            {
                image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',], otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT"] } }
            }]
    },
    {
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"], otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',], otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT"] } }
    },
    {
        image: Images.banner5, text: 'PARTNER', disabled: true, navigateTo: 'ProductDeatilInfo',

    }

]

export const dataSetAirportServiceEnglish = [
    {
        image: Images.banner13, text: 'CARGO & PUSHBACK TRACTORS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D","SERVICE PROSPEKT"]
                    , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", ] }
                }
            },
            {
                image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT' ]
                    , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] }

                }
            }
        ]
    },


    {
        image: Images.banner9, text: '»SHERPA« D', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"]
            , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D"] }
        }
    },
    {
        image: Images.banner15, text: '»SHERPA« E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', "SERVICE PROSPEKT"]
            , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', ] }

        }
    },



    {
        image: Images.banner8, text: 'CONVENTIONAL TRACTORS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"],
                 otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE",  ] } }
            },
            {
                image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: {
                    image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"], otherData: {
                        image: Images.banner78, videoId: "eP_YC0cr0n0",
                        text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',  ],
                    }
                }
            }]
    },
    {
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"], 
        otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE",  ] } }
    },
    {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: {
            image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"], otherData: {
                image: Images.banner78, videoId: "eP_YC0cr0n0",
                text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',],
            }
        }
    },
    {
        image: Images.banner7, text: 'TOWBARLESS TRACTORS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"],
                 otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", ] } }
            },
            {
                image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "SERVICE PROSPEKT"],
                 otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT",  ] } }
            },
            {
                image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"], 
                otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',  ] } }
            }
        ]
    },
    {
        image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"],
         otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", ] } }
    },
    {
        image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "SERVICE PROSPEKT",],
         otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", ] } }
    },
    {
        image: Images.banner83, text: 'AST-1X', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT",], 
        otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',  ] } }
    },
    {
        image: Images.banner6, text: 'AIRCRAFT RECOVERY TRANSPORT SYSTEMS', navigateTo: 'ProductDeatilInfo',

        data: [
            {
                image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"], 
                otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN",  ] } }
            },
            {
                image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
                data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT",],
                 otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', ] } }
            }]
    },
    {
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"], 
        otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN",  ] } }
    },
    {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true, navigateTo: 'ProductDeatilVideo',
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT",],
         otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',  ] } }
    },
    {
        image: Images.banner5, text: 'PARTNER', disabled: true, navigateTo: 'ProductDeatilInfo',

    }

]


 
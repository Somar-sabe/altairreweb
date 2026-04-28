import Image from 'next/image'
import { Link } from '@/navigation'
import React from 'react'

const AllAgents = () => {
  const agen = [
        {
      Id: 1,
      FirstName: 'Raheleh',
      LastName: 'Azhdari',
      Position: 'Sales Manager',
      ProfilePhoto: '/rahela.jpeg', // renamed from /Профи фото.png
    },
    {
      Id: 2,
      FirstName: 'Dana',
      LastName: 'Nurgazy',
      Position: 'HR Manager',
      ProfilePhoto: '/dana.jpeg', // renamed from /Профи фото.png
    },


    {
      Id: 3,
      FirstName: 'Neome',
      LastName: 'Campos',
      Position: 'Receptionist',
      ProfilePhoto: '/naeomi.jpeg',
    },
    {
        Id:4,
        FirstName: 'Majid',
        LastName: 'Malik',
        Position: 'Finance Manager',
        ProfilePhoto: '/majid.jpeg',
      },
    {
      Id: 5,
      FirstName: 'Mozhdeh',
      LastName: 'Maaref',
      Position: 'Sales Agent',
      ProfilePhoto: '/mjd.jpeg',
    },
    
            {
      Id: 6,
      FirstName: 'Rachel',
      LastName: 'Mabansag',
      Position: 'Sales Agent',
      ProfilePhoto: '/rachel.jpeg',
    },
            {
      Id: 7,
      FirstName: 'Peter',
      LastName: 'Emmanuel',
      Position:'Sales Agent',
      ProfilePhoto:'/peter.jpeg',

    },
            {
      Id: 8,
      FirstName: 'Oliver',
      LastName: 'Cho',
      Position: 'Sales Agent',
      ProfilePhoto: '/oliver.jpeg',
    }, 
                {
      Id: 9,
      FirstName: 'Soudabeh',
      LastName: 'Gholamreza',
      Position: 'Sales Agent',
      ProfilePhoto: '/suda.jpeg',
    },
            {
      Id: 10,
      FirstName: 'Didar',
      LastName: 'Charyyev',
      Position: 'Sales Agent',
      ProfilePhoto: '/didar.jpeg',
    },
            {
      Id: 11,
      FirstName: 'Ghaith',
      LastName: 'Sassi',
      Position: 'Sales Agent',
      ProfilePhoto: '/sassi.jpg',
    },
            {
      Id: 12,
      FirstName: 'Muhammad',
      LastName: 'Usman',
      Position: 'Sales Agent',
      ProfilePhoto: '/othman.jpg',
    },
        {
      Id: 13,
      FirstName: 'Aamir',
      LastName: 'Hussain',
      Position:'Sales Agent',
      ProfilePhoto:'/Aamir.jpg',

    },
            {
      Id: 14,
      FirstName: 'Mikhail',
      LastName: 'Gogolkov',
      Position: 'Sales Agent',
      ProfilePhoto: '/Untitled-1.jpg',
    }, 

        {
      Id: 15,
      FirstName: 'Wilson',
      LastName: 'Essoka',
      Position: 'Sales Agent',
      ProfilePhoto: '/wilson.jpeg',
    },

          {
      Id: 16,
      FirstName: 'Mahmoud',
      LastName: 'Ahmed',
      Position: 'Sales Agent',
      ProfilePhoto: '/IMG_9047.JPG',
    }
,
            {
      Id: 17,
      FirstName: 'Parisa',
      LastName: 'Farahhal',
      Position: 'Sales Agent',
      ProfilePhoto: '/parisa.jpeg',
    }
,
    {
      Id: 18,
      FirstName: 'Tofiq',
      LastName: 'Daoud',
      Position: 'Sales Agent',
      ProfilePhoto: '/IMG_5802.JPG',
    },

    {
      Id: 19,
      FirstName: 'Jihad',
      LastName: 'Mawla',
      Position: 'Sales Agent',
      ProfilePhoto: '/IMG_5798.JPG',
    },
    {
      Id: 20,
      FirstName: 'Junaid',
      LastName: 'Ali',
      Position: 'Telesales Specialist',
      ProfilePhoto: '/IMG_5807.JPG',
    }
  ]

  return (
    <>
      {agen.map((agent) => (
        <div className="col" key={agent.Id}>
          <div className="feature-style2 mb30">
            <div className="feature-img">
              <Link href={`/`}>
                <Image
                  width={210}
                  height={240}
                  className="bdrs12 w-100 h-90 cover"
                  src={agent.ProfilePhoto}
                  alt={`${agent.FirstName} ${agent.LastName}`}
                  unoptimized
                />
              </Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}  className="feature-content pt20" >
              <h6 className="title mb-1">
                <Link href={`/`}>
                  {agent.FirstName} {agent.LastName}
                </Link>
              </h6>
              <p className="text fz15">{agent.Position}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default AllAgents

import { Sermon, ChurchEvent, Ministry, Testimonial, LeaderProfile } from './types';

export const CHURCH_NAME = "Faith Baptist Church Praise Chapel";
export const CHURCH_LOCATION = "Oke-Owode, Ogbomoso, Oyo State, Nigeria";
export const PASTOR_NAME = "Rev. Dr. Jacob Olugbenga Ogunyode-Agbaosi";
export const PASTOR_SHORT_NAME = "Rev. Dr. J. O. Ogunyode-Agbaosi";

export const MISSION_STATEMENT = "A place where faith is strengthened, hope is renewed, and lives are touched by God's Word — a family coming together to worship, grow in faith, and experience the love and presence of God.";

export const STUDY_AND_WORSHIP_TIMES = [
  {
    id: "wt-1",
    day: "Sundays",
    time: "8:00 AM - 11:30 AM",
    title: "Sunday School & Glorious Worship Service",
    description: "Our main corporate worship assembly. Join us as we sing, pray, and receive the life-transforming Word of God.",
    location: "Main Sanctuary"
  },
  {
    id: "wt-2",
    day: "Wednesdays",
    time: "5:00 PM - 6:30 PM",
    title: "Midweek Interactive Bible Hour",
    description: "Deep study of God's Word with interactive questions, answers, and corporate prayers. Food for your soul.",
    location: "Main Sanctuary"
  },
  {
    id: "wt-3",
    day: "Fridays",
    time: "5:30 PM - 7:00 PM",
    title: "Power & Praise Hour (Prayer Meeting)",
    description: "An intensive time in the presence of God. We engage in spiritual warfare, intercession, and prophetic breakthrough praises.",
    location: "Main Sanctuary"
  }
];

export const SERMONS: Sermon[] = [
  {
    id: "sermon-1",
    title: "Unlocking Divine Keys of Covenant Faithfulness",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-05-24",
    scripture: "Malachi 3:8-12 & Matthew 23:23",
    series: "The Covenant Life",
    duration: "42:15",
    youtubeId: "dQw4w9WgXcQ", // Representative setup
    summary: "God responds to compliance, not complaints! Discover how walking in financial faithfulness and structural obedience to God's covenants opens the windows of heaven and rebukes the devourer for your sake.",
    thumbnail: "https://picsum.photos/seed/sermon1/800/450"
  },
  {
    id: "sermon-2",
    title: "Rebuilding the Broken Altars of Praise",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-05-17",
    scripture: "Nehemiah 2:17-20 & Psalm 150:1-6",
    series: "Dwell in His Presence",
    duration: "38:45",
    youtubeId: "dQw4w9WgXcQ",
    summary: "When the walls are fallen and the gates are burned, our first response must not be despair, but the rebuilding of our praise. Real praise shifts atmospheres, unlocks prison doors, and invites God to take His place.",
    thumbnail: "https://picsum.photos/seed/sermon2/800/450"
  },
  {
    id: "sermon-3",
    title: "Possession of the Promised Land",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-05-10",
    scripture: "Joshua 1:1-9",
    series: "Strong and Courageous",
    duration: "45:10",
    youtubeId: "dQw4w9WgXcQ",
    summary: "Every promise of God requires a step of faith. Rev. Dr. J. O. Ogunyode-Agbaosi walks us through Joshua's divine instructions, emphasizing meditation on the Word and unwavering courage as the twin engines of success.",
    thumbnail: "https://picsum.photos/seed/sermon3/800/450"
  },
  {
    id: "sermon-4",
    title: "Let Your Light So Shine in Ogbomoso",
    speaker: "Deaconess Deborah Alao",
    date: "2026-05-03",
    scripture: "Matthew 5:14-16 & Philippians 2:15",
    series: "Spiritual Impact",
    duration: "35:20",
    youtubeId: "dQw4w9WgXcQ",
    summary: "Ambassadors of Christ are designed for the lampstand, not the cellar. This powerful message calls every believer in Ogbomoso to lead with integrity, good works, and active love in their daily workplaces.",
    thumbnail: "https://picsum.photos/seed/sermon4/800/450"
  }
];

export const EVENTS: ChurchEvent[] = [
  {
    id: "event-1",
    title: "Annual Praiseworthy Glory & Grace Conference",
    date: "June 15 - June 21, 2026",
    time: "5:00 PM Daily",
    location: "Main Sanctuary, Praise Chapel Oke-Owode",
    description: "Our landmark annual revival gathering. Seven days of profound apostolic teachings, prophetic worship, raw testimonies, and ministerial impartation. Make plans to attend!",
    category: "Special Service",
    image: "https://picsum.photos/seed/glory/800/500"
  },
  {
    id: "event-2",
    title: "Men's Missionary Union (MMU) Empowerment Summit",
    date: "June 27, 2026",
    time: "9:00 AM",
    location: "Church Lecture Hall / Fellowship Building",
    description: "A specialized roundtable assembly designed to equip Christian fathers and young men for spiritual, economic, and family leadership in Ogbomoso. Featuring seasoned business speakers.",
    category: "Men",
    image: "https://picsum.photos/seed/fathers/800/500"
  },
  {
    id: "event-3",
    title: "Youth and Teens Blaze Outreach 'Light of Ogbomoso'",
    date: "July 04, 2026",
    time: "2:00 PM",
    location: "Praise Chapel Ground & Surrounding Communities",
    description: "An interactive, high-impact youth outreach blending faith, community sanitation support, medical checks guidance, and a grand musical gospel event in Oke-Owode. Come and express Christ!",
    category: "Youth",
    image: "https://picsum.photos/seed/youthoutreach/800/500"
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: "min-1",
    name: "Men's Missionary Union (MMU)",
    iconName: "Shield",
    tagline: "Equipping men as spiritual leaders in the home, church, and society.",
    description: "The MMU brings together fathers, husbands, and young men to build robust spiritual accountability, sponsor church missions, and raise the next generation of godly leaders in Oyo State.",
    leader: "Deacon Amos Oyebade",
    meetingTime: "Every 2nd & 4th Sunday after Service",
    image: "https://picsum.photos/seed/mmu/800/500"
  },
  {
    id: "min-2",
    name: "Women's Missionary Union (WMU)",
    iconName: "Heart",
    tagline: "Nurturing women in spiritual growth, mission advocacy, and prayer.",
    description: "The WMU is our vibrant fellowship of women, mothers, and daughters (Lydia and Girls' Auxiliary). They lead key prayer projects, charity visitations to Ogbomoso hospitals, and family-building seminars.",
    leader: "Mrs. Comfort Ogunyode-Agbaosi",
    meetingTime: "Every Tuesday, 4:00 PM",
    image: "https://picsum.photos/seed/wmu/800/500"
  },
  {
    id: "min-3",
    name: "Praise Chapel Worship Choir",
    iconName: "Music",
    tagline: "Leading the assembly into standard-setting, prophetic praise & worship.",
    description: "Our dedicated music ministry consists of anointed vocalists and instrumentalists. They lead deep worship and powerful praise sessions, drawing down the heavy presence of the Holy Spirit in every service.",
    leader: "Bro. Emmanuel Adeleke",
    meetingTime: "Thursdays 5:00 PM & Saturdays 4:00 PM",
    image: "https://picsum.photos/seed/choir/800/500"
  },
  {
    id: "min-4",
    name: "Youth & Teen Blaze Fellowship",
    iconName: "Flame",
    tagline: "Igniting a pure spiritual fire and securing academic & professional success.",
    description: "We provide an energetic, engaging environment for teenagers and university/college students. Blending deep theological teaching with mental development, career guidance, and fun hangouts.",
    leader: "Sis. Rachel Alabi",
    meetingTime: "Every Saturday, 5:00 PM",
    image: "https://picsum.photos/seed/teens/800/500"
  },
  {
    id: "min-5",
    name: "Children's Church (Sunbeams)",
    iconName: "Baby",
    tagline: "Building a biblical foundation in children from age 2 to 12.",
    description: "Under the care of certified Christian educators, children study the scriptures through creative stories, educational games, and bible memorization, ensuring a lifelong foundation in Christ.",
    leader: "Deaconess Esther Ajayi",
    meetingTime: "Sundays 8:00 AM (Concurrent with Main Service)",
    image: "https://picsum.photos/seed/kids/800/500"
  },
  {
    id: "min-6",
    name: "Evangelism & Mission Outreach",
    iconName: "Globe2",
    tagline: "Preaching the Gospel across Oyo State and planting spiritual seeds.",
    description: "The heartbeat of our church. We organize rural gospel campaigns, coordinate neighborhood door-to-door evangelism in Oke-Owode, and offer relief materials to the marginalized.",
    leader: "Bro. Philip Olayinka",
    meetingTime: "Every Last Saturday of the Month, 8:00 AM",
    image: "https://picsum.photos/seed/mission/800/500"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Brother Olusola Babalola",
    role: "Ogbomoso Native & Business Owner",
    quote: "Finding Praise Chapel was a turning point for my family. Rev. Dr. J. O. Ogunyode-Agbaosi's messages are deeply rooted in scripture and incredibly practical. My faith is fully alive, and my business operates on Kingdom integrity now.",
    avatar: "https://picsum.photos/seed/user1/150/150"
  },
  {
    id: "t-2",
    name: "Sister Helen Okonta",
    role: "LAUTECH Nursing Alumna",
    quote: "While studying at Ogbomoso, this church became my home away from home. The Youth Blaze fellowship kept me grounded, while the church's encouragement guided me professionally. Truly a family that cares.",
    avatar: "https://picsum.photos/seed/user2/150/150"
  },
  {
    id: "t-3",
    name: "Deaconess Abimbola Alabi",
    role: "Long-time Church Member",
    quote: "I can testify that the presence of the Lord is permanently set in Oke-Owode Praise Chapel. I have received divine healings and family breakthroughs during our Friday Power & Praise services. Come and experience God!",
    avatar: "https://picsum.photos/seed/user3/150/150"
  }
];

export const BANK_DETAILS = {
  bankName: "Guaranty Trust Bank (GTBank)",
  accountNumber: "0123456789",
  accountName: "FAITH BAPTIST CHURCH PRAISE CHAPEL",
  sortingCode: "058152052",
  branch: "Ogbomoso Branch"
};

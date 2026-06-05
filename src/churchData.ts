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
    time: "4:30 PM - 7:00 PM",
    title: "Departmental Meetings & Prayer Meeting",
    description: "Our mid-week renewal: Departmental Missionary Meetings (MMU, WMU, RA, Sunbeam, GA, Lydia) from 4:30 PM to 6:00 PM, followed immediately by our corporate Prayer Meeting from 6:00 PM to 7:00 PM.",
    location: "Main Sanctuary & Fellowship Halls"
  },
  {
    id: "wt-3",
    day: "Fridays",
    time: "4:30 PM - 6:00 PM",
    title: "Interactive Bible Study",
    description: "Digging deep into the standard of God's Word with active studies, discussions, and dynamic spiritual applications.",
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
    image: "public/images/TEENAGERS.jpg"
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: "min-1",
    name: "Men's Missionary Union (MMU)",
    iconName: "Shield",
    tagline: "Iron sharpening iron – building brotherhood, accountability, and spiritual leadership.",
    description: "Our Men's Fellowship brings together husbands and fathers of all ages to build deep spiritual accountability. We are committed to establishing strong biblical foundations in our families, careers, and the church community. Through our regular roundtable discussions, mentorship programs, and local mission supports, we help men discover their leadership path under God's grace.",
    leader: "Mr. Mathew Oke",
    leaderTitle: "Chairman",
    meetingTime: "Every Wednesday, 5:00 PM",
    image: "public/images/fathers.jpg"
  },
  {
    id: "min-2",
    name: "Women's Misionary Union (WMU)",
    iconName: "Heart",
    tagline: "Empowering women in sisterhood, prayer, and mission advocacy.",
    description: "The Women's Fellowship provides a nurturing space for sisters, mothers, and daughters to connect and grow together. We advocate for intense prayer, dynamic bible studies, and charitable outreaches to Ogbomoso safe-spaces and motherless homes. Our seminars cover christian family nurturing, professional development, and emotional wellness, releasing the active power of godly womanhood.",
    leader: "Mrs. Dorcas Ajadi",
    leaderTitle: "Chairman",
    meetingTime: "Every Wednesday, 4:30 PM",
    image: "public/images/mothers.jpg"
  },
  {
    id: "min-ra",
    name: "Royal Ambassadors (RA)",
    iconName: "Compass",
    tagline: "Ages 10–24 – training young boys to be active, courageous ambassadors for Christ.",
    description: "Royal Ambassadors (RA) is our missionary education group for young boy adventurers and young men. We focus on developing robust spiritual characters, practical outdoor skills, and mission knowledge. Through camping, sport engagements, and bible study groups, RA members learn devotion, discipline, and active peer-level evangelism.",
    leader: "Amb. Extra. Ogundipe Gideon",
    leaderTitle: "President",
    meetingTime: "Every Wednesday, 5:00 PM",
    image: "public/images/RAs.jpg"
  },
  {
    id: "min-ga",
    name: "Girls' Auxiliary (GA)",
    iconName: "Crown",
    tagline: "Ages 10–16 – bringing up virtuous, mission-minded daughters of the King.",
    description: "The Girls' Auxiliary (GA) is designed for young girls to discover their identity as royal daughters of the Heavenly King. We study the scriptures, highlight historical missionary works, nurture spiritual virtues, and engage in creative domestic skills. GA builds lasting Christian sisterhood that anchors hearts in deep chastity, grace, and spiritual service.",
    leader: "TBA",
    leaderTitle: "President",
    meetingTime: "Every Wednesday, 5:00 PM",
    image: "public/images/seniorGA.jpg"
  },
  {
    id: "min-lydia",
    name: "Lydia Auxiliary",
    iconName: "Gem",
    tagline: "For young single women – nurturing focus, spiritual elegance, and mission impact.",
    description: "The Lydia Auxiliary represents our vibrant fellowship of young single women. Modelled after Lydia of Thyatira, we cultivate spiritual elegance, self-reliance, and standard-setting ministry advocacy. We support professional development and missions, empowering young women to excel in their career callings and Christian endeavors with total holiness.",
    leader: "Lydia Olayiwola Rachel",
    leaderTitle: "President",
    meetingTime: "Every Wednesday, 5:00 PM",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "min-3",
    name: "Youth & Teens Fellowship (Blaze)",
    iconName: "Flame",
    tagline: "Ages 13–25 – igniting true discipleship, mentoring, and academic excellence.",
    description: "The Blaze Fellowship is an energetic community of adolescents and university scholars (LAUTECH, Bowen University, etc.) seeking to transform their spaces. We bridge the gap between scientific inquiries and raw biblical truths through tailored interactive debates, mentoring circles, and skill development classes. Here, youths discover practical keys of holiness, character, and professional competence.",
    leader: "Sis. Rachel Alabi",
    meetingTime: "Tuesdays, 5:00 PM",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "min-4",
    name: "Children's Church (Sunbeams)",
    iconName: "Baby",
    tagline: "Ages 3–12 – cultivating a firm foundation of Bible-based fun and godly learning.",
    description: "Our Children's Church offers a vibrant, safe, and engaging environment where our precious boys and girls learn the ways of the Lord. Led by passionate and trained Christian teachers, the children participate in creative crafts, interactive bible dramas, and scripture reciting events. We build an uncompromised biblical framework that prepares their hearts for a lifelong walk with Christ.",
    leader: "Deaconess Esther Ajayi",
    meetingTime: "Wednesdays, 5:00 PM (Concurrent with Worship)",
    image: "public/images/childrens.jpg"
  },
  {
    id: "min-5",
    name: "Choir & Praise Team",
    iconName: "Music",
    tagline: "Guiding the church in standard-setting, prophetic praise and atmosphere-shifting worship.",
    description: "Our music department is a dedicated army of musicians and vocalists who view praise as spiritual warfare and coordinates of covenant connection. We cultivate professional musical competence alongside deep consecration, preparing songs that honor God and stir hearts. Weekly rehearsals foster vocal refinement and deep fellowship, ensuring our Sunday praise elevates the entire sanctuary into the heavy weight of God's presence.",
    leader: "Bro. Emmanuel Adeleke",
    meetingTime: "Thursdays 5:00 PM",
    image: "public/images/choir.jpg"
  },
  {
    id: "min-6",
    name: "Evangelism & Outreach",
    iconName: "Globe2",
    tagline: "Reaching Ogbomoso with the gospel of grace and active hands of compassion.",
    description: "This ministry embodies the ultimate heartbeat of Jesus to seek and rescue the lost through intensive street outreaches and rural community missions. We partner with medical teams to provide health resources to indigent communities while preaching the uncompromised salvation of Christ. Through our food and clothing bank, we also offer practical relief to student quarters and struggling local families in Oke-Owode.",
    leader: "Deacon Philip Olayinka",
    meetingTime: "Every Last Saturday, 8:00 AM",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "min-7",
    name: "Prayer Warriors",
    iconName: "BookOpen",
    tagline: "Remaining vigilant in spiritual warfare, standing in the gap on the intercessory chain.",
    description: "The Prayer Warriors team is the powerhouse engine of the church, operating a continuous prayer chain and intercession network. We stand on the wall for our families, the Oyo State community, the mother church body, and our territorial breakthrough. Meeting in deep communion, we take up spiritual weapons to push back darkness and maintain a permanent open heaven atmosphere over Ogbomoso.",
    leader: "Deaconess Deborah Alao",
    meetingTime: "Fridays, 4:30 PM",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600"
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

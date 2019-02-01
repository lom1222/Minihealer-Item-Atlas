




// var itemData = {
//   fortifiedSword :      {boss : "Skeleton King", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10},{string : "health", min : 50, max : 100}]},
//   fortifiedBow :        {boss : "Skeleton King", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedHelm :       {boss : "Skeleton King", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   lionHeart :           {boss : "Skeleton King", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   skeletonSword :       {boss : "Skeleton King", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   toxicMaker :          {boss : "Skeleton King", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   simpleSword :         {boss : "Gump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   simpleShield :        {boss : "Gump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedAxe :        {boss : "Gump", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedBoot :       {boss : "Gump", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   riddle :              {boss : "Gump", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   gumpsEye :            {boss : "Gump", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   vileGreataxe :        {boss : "Gump", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   simpleAxe :             {boss : "Iqsior", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   simpleBow :             {boss : "Iqsior", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   simpleHelm :            {boss : "Iqsior", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   simpleBoot :            {boss : "Iqsior", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedShield :       {boss : "Iqsior", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   iqsiorsCape :           {boss : "Iqsior", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedBattleplate :  {boss : "Iqsior", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   iqsiorsStaff :          {boss : "Iqsior", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   shamanicCodex :         {boss : "Iqsior", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   simpleDagger :        {boss : "Solaria and Lunaria", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   simpleHat :           {boss : "Solaria and Lunaria", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   monOrb :              {boss : "Solaria and Lunaria", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   frostfireArmour :     {boss : "Solaria and Lunaria", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedArrow :      {boss : "Solaria and Lunaria", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedWand :       {boss : "Solaria and Lunaria", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedLoop :       {boss : "Solaria and Lunaria", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   houYisBow :           {boss : "Solaria and Lunaria", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   stormBringer :        {boss : "Solaria and Lunaria", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   simpleRing :          {boss : "Sepitus", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   simpleBelt :          {boss : "Sepitus", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   sepitussClaw :        {boss : "Sepitus", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   blackWand :           {boss : "Sepitus", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fortifiedRing :       {boss : "Sepitus", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   manaCrystal :         {boss : "Sepitus", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   blessedHelm :         {boss : "Sepitus", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   gemOfRiches :         {boss : "Sepitus", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   immortality :         {boss : "Sepitus", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   jerkinOfFadedMagic :  {boss : "Sepitus", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   reinforcedAxe :       {boss : "Despair", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedArmour :    {boss : "Despair", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   astonishingGlove :    {boss : "Despair", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   despairsAmulet :      {boss : "Despair", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   bookOfDread :         {boss : "Despair", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   anguish :             {boss : "Despair", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fury :                {boss : "Despair", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   theTempest :          {boss : "Despair", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   serenity :            {boss : "Despair", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   dragonheart :         {boss : "Despair", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   lightsVigil :         {boss : "Despair", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   reinforcedCape :        {boss : "Cassandra", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedBow :         {boss : "Cassandra", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedWand :        {boss : "Cassandra", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   eternalRing :           {boss : "Cassandra", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   elemetalGreatstaff :    {boss : "Cassandra", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   luminousWord :          {boss : "Cassandra", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   partnership :           {boss : "Cassandra", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   shootingStar :          {boss : "Cassandra", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   gauntletsOfHolyMight :  {boss : "Cassandra", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fallenFlames :          {boss : "Cassandra", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   reinforcedRing :      {boss : "Norrix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedBoot :      {boss : "Norrix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   norrixsFlute :        {boss : "Norrix", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   norrixsCarcass :      {boss : "Norrix", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   luxury :              {boss : "Norrix", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   toothAndNail :        {boss : "Norrix", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   spellSong :           {boss : "Norrix", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   mercy :               {boss : "Norrix", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   frozenSpirit :        {boss : "Norrix", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   reinforcedHelm :      {boss : "Tolmon", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedBelt :      {boss : "Tolmon", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedSword :     {boss : "Tolmon", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   voodooTotem :         {boss : "Tolmon", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   stormWalker :         {boss : "Tolmon", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   lightningAegis :      {boss : "Tolmon", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   motivation :          {boss : "Tolmon", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   tolmonsCruelty :      {boss : "Tolmon", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   nightsKiss :          {boss : "Tolmon", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   lightningFist :       {boss : "Tolmon", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   reinforcedArrow :       {boss : "The Mirror", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedChestplate :  {boss : "The Mirror", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reinforcedShield :      {boss : "The Mirror", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   fireEmblem :            {boss : "The Mirror", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   triuneStone :           {boss : "The Mirror", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   affluence :             {boss : "The Mirror", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   generosity :            {boss : "The Mirror", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   thor :                  {boss : "The Mirror", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   hellsEdge :             {boss : "The Mirror", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   remorse :               {boss : "The Mirror", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   insanity :              {boss : "The Mirror", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   enchantedArrow :      {boss : "Grunzar", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedSword :      {boss : "Grunzar", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedGlove :      {boss : "Grunzar", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   demonicCloak :        {boss : "Grunzar", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   arcaneKnowledge :     {boss : "Grunzar", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   innerFlame :          {boss : "Grunzar", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   wisdom :              {boss : "Grunzar", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   rubiksCube :          {boss : "Grunzar", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   rubiksSphere :        {boss : "Grunzar", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   songOfHope :          {boss : "Grunzar", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   darkIntent :          {boss : "Grunzar", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   penance :             {boss : "Grunzar", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   enchantedHat :        {boss : "Izki", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedArmour :     {boss : "Izki", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedAxe :        {boss : "Izki", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   demonicGlove :        {boss : "Izki", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   demonicArmour :       {boss : "Izki", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   starsRecurve :        {boss : "Izki", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   meeksCunning :        {boss : "Izki", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   rampage :             {boss : "Izki", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   manaEater :           {boss : "Izki", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   solitude :            {boss : "Izki", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   shiverspine :         {boss : "Izki", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   soulOfTheThunder :    {boss : "Izki", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   enchantedBow :        {boss : "Sargaris", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedHelm :       {boss : "Sargaris", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedShield :     {boss : "Sargaris", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   requiem :             {boss : "Sargaris", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   windsWhisper :        {boss : "Sargaris", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   theButcher :          {boss : "Sargaris", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   ivoryConqueror :      {boss : "Sargaris", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   endlessGlory :        {boss : "Sargaris", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   windforce :           {boss : "Sargaris", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   holyWool :            {boss : "Sargaris", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   celestia :            {boss : "Sargaris", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   equilibrium :         {boss : "Sargaris", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   enchantedWand :       {boss : "Droto and friends", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedAmulet :     {boss : "Droto and friends", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   enchantedChestPlate : {boss : "Droto and friends", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   flux :                {boss : "Droto and friends", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   valhalla :            {boss : "Droto and friends", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   thePurifier :         {boss : "Droto and friends", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   meditation :          {boss : "Droto and friends", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   vengeance :           {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   borrowedTime :        {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   edgeOfEternity :      {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   rainbowSoul :         {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   shroudOfEternalWars : {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   reachOfTheSun :       {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   theElementalist :     {boss : "Droto and friends", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   demonicSword :            {boss : "Atiel", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   demonicBoot :             {boss : "Atiel", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   demonicRing :             {boss : "Atiel", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   pouchOfTheForest :        {boss : "Atiel", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   naturesTunic :            {boss : "Atiel", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   anarchy :                 {boss : "Atiel", difficulty : "brutal", rarity : "rare", dropChance : 0.41,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   handOfMadness :           {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   sunlight :                {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   intervention :            {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   soulForge :               {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   serpentsBlood :           {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   faithkeeper :             {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   seismTheDevourerOfGods :  {boss : "Atiel", difficulty : "insane", rarity : "epic", dropChance : 0.33,
//                             itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   divine_hellsEdge :    {boss : "Zix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   alterationOfMinds :   {boss : "Zix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   twistedBargain :      {boss : "Zix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   theSunwalker :        {boss : "Zix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   supernova :           {boss : "Zix", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   divine_tolmonsCruelty : {boss : "Beetz", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   sprinterOfTheForest :   {boss : "Beetz", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   primordialSteel :       {boss : "Beetz", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   inpureGlobe :           {boss : "Beetz", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   boneChill :           {boss : "Mump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   twister :             {boss : "Mump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   infusedMantle :       {boss : "Mump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   divine_stormBringer : {boss : "Mump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   stoneOfMadness :      {boss : "Mump", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   divine_anguish :      {boss : "Gorl", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   frozenHell :          {boss : "Gorl", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   rampage :             {boss : "Gorl", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   painDuplication :     {boss : "Gorl", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   starlight :           {boss : "Gorl", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   divine_skeletonSword :  {boss : "Arney and Barney", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   scalesOfTheDeep :       {boss : "Arney and Barney", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   zombification :         {boss : "Arney and Barney", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   venom :                 {boss : "Arney and Barney", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   divine_shootingStar :   {boss : "Arney and Barney", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                           itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//
//   extraOffering :       {boss : "Clara", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   divine_nightsKiss :   {boss : "Clara", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   prolongedPain :       {boss : "Clara", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 5, max : 10}, {string : "health", min : 50, max : 100}]},
//   tempestFury :         {boss : "Clara", difficulty : "normal", rarity : "common", dropChance : 0.65,
//                         itemAffixes : [{string : "damage", min : 10, max : 10}, {string : "health", min : 50, max : 100}]}
//   //placeholder : {},
//
// };

var artifactsData;
var attributesData;
var rarityData;
var typeData;
var slotTypeData;
var mutationData;

init()

function init(){
  //addItems();
  importJson();
  addItemsJson();
}

// function addItems(){
//   var itemDataArray = Object.keys(itemData);
//   for(var x = 0;x < itemDataArray.length;x++){
//     var bossDiv = getOrCreateBossDiv(itemData[itemDataArray[x]].boss);
//     var item = createNewItem(itemData[itemDataArray[x]]);
//     bossDiv.appendChild(item);
//   }
// }

function addItemsJson(){
  for(var x = 0;x < artifactsData.length;x++){
    if(artifactsData[x].Boss!=undefined){
      var bossDiv = getOrCreateBossDiv(artifactsData[x].Boss);
      var item = createNewItemJson(artifactsData[x]);
      //talent.style.background = "url('images/"+sortedTalents[z].img+".png') center center no-repeat #000000";
      item.style.background = "url('images/"+removeSpaces(artifactsData[x].ArtifactName)+".png') center center no-repeat #000000";
      bossDiv.appendChild(item);
    }
  }
}

function removeSpaces(string){
  var toRemove = " ,'";
  for(var x = 0;x < string.length;x++){
    if(toRemove.indexOf(string.charAt(x))!=-1&&x!=string.length){
      string = string.substring(0,x)+string.substring(x+1);
      x--;
    }
  }
  return string;
}

function getOrCreateBossDiv(boss){
  var bossDiv = document.getElementById(boss);
  if(bossDiv==undefined||bossDiv==null){
    bossDiv = document.createElement("div");
    bossDiv.className = "bossDiv";
    bossDiv.id = boss;
    var itemsDiv = document.getElementById("itemsDiv");
    itemsDiv.appendChild(bossDiv);
  }
  return bossDiv;
}

// function createNewItem(itemInfo){
//   var item = document.createElement("div");
//   item.className = "item";
//
//   var itemTooltip = createTooltip();
//   item.appendChild(itemTooltip);
//
//   itemTooltip.appendChild(createItemProperty("itemName",itemInfo.name));
//   itemTooltip.appendChild(createItemProperty("itemTags",itemInfo.tags));
//   itemTooltip.appendChild(createItemAffixes(itemInfo.itemAffixes));
//   itemTooltip.appendChild(document.createElement("hr"));
//   itemTooltip.appendChild(createItemPropertyWithString("itemBoss",itemInfo.boss,"Boss"));
//   itemTooltip.appendChild(createItemPropertyWithString(itemInfo.difficulty,itemInfo.difficulty,"Difficulty"));
//   itemTooltip.appendChild(createItemPropertyWithString(itemInfo.rarity,itemInfo.rarity, "Rarity"));
//   itemTooltip.appendChild(createItemPropertyWithString("itemDropChance",itemInfo.dropChance, "Drop chance"));
//   return item;
// }

function createNewItemJson(itemInfo){
  var item = document.createElement("div");
  item.className = "item";

  var itemTooltip = createTooltip();
  item.appendChild(itemTooltip);

  itemTooltip.appendChild(createItemProperty("itemName",itemInfo.ArtifactName));
  itemTooltip.appendChild(createItemTags(itemInfo));
  if(itemInfo.Description!=undefined){
    itemTooltip.appendChild(createItemAffixesJson(itemInfo.Description));
  }else{
    //console.log(itemInfo.ArtifactName);
  }
  itemTooltip.appendChild(document.createElement("hr"));

  var itemTooltipExtra = document.createElement("div")
  itemTooltipExtra.className = "extraInfoTooltip";
  itemTooltip.appendChild(itemTooltipExtra);

  itemTooltipExtra.appendChild(createItemProperty("slot",slotTypeData[itemInfo.SlotType].text));
  itemTooltipExtra.appendChild(createItemPropertyWithString("itemBoss",itemInfo.Boss,"Boss"));
  if(itemInfo.isChaotic){
    itemTooltipExtra.appendChild(createItemProperty("chaotic","Chaotic"));
  }
  itemTooltipExtra.appendChild(createItemPropertyWithString(itemInfo.BossDifficulty,itemInfo.BossDifficulty,"Difficulty"));
  if(itemInfo.isDivine){
    itemTooltipExtra.appendChild(createItemProperty("divine","Divine"));
  }
  itemTooltipExtra.appendChild(createItemPropertyWithString(rarityData[itemInfo.Rarity].text,rarityData[itemInfo.Rarity].text, "Rarity"));
  itemTooltipExtra.appendChild(createItemPropertyWithString("itemLevel",itemInfo.HiddenItemLevel, "Item level"));
  if(itemInfo.isUltraRare){
    itemTooltipExtra.appendChild(createItemProperty("ultraRare","Ultra Rare"));
  }
  itemTooltipExtra.appendChild(createItemPropertyWithString("itemDropChance",itemInfo.DropRate*100+"%", "Drop chance"));
  itemTooltipExtra.appendChild(addPossibleItemMutations(itemInfo));
  return item;
}

function createTooltip(){
  var tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  return tooltip;
}

function createItemTags(itemInfo){
  var itemTags = document.createElement("div");
  itemTags.className = "itemTags";
  itemTags.innerHTML += "(";
  itemTags.innerHTML += typeData[itemInfo.Type].text;
  if(rarityData[itemInfo.Rarity].text=="Legendary"){
    itemTags.innerHTML += ", Unique";
  }
  if(itemInfo.isUltraRare){
    itemTags.innerHTML += ", Ultra rare";
  }
  if(itemInfo.isChaotic){
    itemTags.innerHTML += ", Chaotic";
  }
  if(itemInfo.isCorrupted){
    itemTags.innerHTML += ", Corrupted";
  }
  if(itemInfo.isDivine){
    itemTags.innerHTML += ", Divine";
  }
  itemTags.innerHTML += ")";
  return itemTags;
}

function addPossibleItemMutations(itemInfo){
  var mutationsTooltip = document.createElement("div");
  mutationsTooltip.className = "mutations";
  mutationsTooltip.innerHTML += "<br><span class='mutationsHead'>Mutations:</span><br>"
  var mutations = itemInfo.possibleMutationAttributes;
  for(var x = 0;x < mutations.length;x++){
    let attribute = attributesData[mutations[x]];
    mutationsTooltip.innerHTML += attribute.T1_MIN+" ~ "+attribute.T1_MAX+" "+attribute.text + "<br>";
  }
  return mutationsTooltip;
}

// function createItemAffixes(affixArray){
//   var itemAffixes = document.createElement("div");
//   for(var x = 0;x < affixArray.length;x++){
//     var affix = affixArray[x];
//     var affixDiv = document.createElement("div");
//     affixDiv.className = "itemAffix";
//     affixDiv.innerHTML = (affix.min!=affix.max?affix.min+" ~ "+affix.max:affix.max)+" "+affix.string;
//     if(affix.min!=affix.max){
//       var perfectQualSpan = document.createElement("span");
//       perfectQualSpan.className = "perfectQualSpan";
//       perfectQualSpan.innerHTML = "("+(affix.min+(affix.max-affix.min)*1.5)+")";
//       affixDiv.appendChild(perfectQualSpan);
//       var madnessQualSpan = document.createElement("span");
//       madnessQualSpan.className = "madnessQualSpan";
//       madnessQualSpan.innerHTML = "("+(affix.min+(affix.max-affix.min)*2)+")";
//       affixDiv.appendChild(madnessQualSpan);
//     }
//     itemAffixes.appendChild(affixDiv);
//   }
//   return itemAffixes;
// }

function createItemAffixesJson(affixArray){
  var itemAffixes = document.createElement("div");
  for(var x = 0;x < affixArray.length;x++){
    var affix = affixArray[x];
    var affixDiv = document.createElement("div");
    affixDiv.className = "itemAffix";
    affixDiv.innerHTML = ((affix.min!=affix.max)&&affix.max!=undefined?affix.min+" ~ "+affix.max:affix.min)+" "+attributesData[affix.attributeType].text;
    if((affix.min!=affix.max)&&affix.max!=undefined){
      var perfectQualSpan = document.createElement("span");
      perfectQualSpan.className = "perfectQualSpan";
      perfectQualSpan.innerHTML = "("+Math.round(affix.min+(affix.max-affix.min)*2.3)+")";
      affixDiv.appendChild(perfectQualSpan);
      var madnessQualSpan = document.createElement("span");
      madnessQualSpan.className = "madnessQualSpan";
      madnessQualSpan.innerHTML = "("+Math.round(affix.min+(affix.max-affix.min)*2.8)+")";
      affixDiv.appendChild(madnessQualSpan);
    }
    itemAffixes.appendChild(affixDiv);
  }
  return itemAffixes;
}

function createItemProperty(property, value){
  var itemProperty = document.createElement("div");
  itemProperty.className = property;
  itemProperty.innerHTML = value;
  return itemProperty;
}

function createItemPropertyWithString(property, value, string){
  var itemProperty = createItemProperty(property, value);
  itemProperty.innerHTML = string+" : "+itemProperty.innerHTML;
  return itemProperty;
}

function search(){
  var searchValue = document.getElementById("search").value;
  var itemArray = document.getElementsByClassName("item");
  for(var x =0;x < itemArray.length;x++){
    if(itemArray[x].innerHTML.indexOf(searchValue)!=-1){
      itemArray[x].style.display = "inline-block";
    }else {
      itemArray[x].style.display = "none";
    }
  }
}

function importJson(){
  artifactsData = artifactDataJson.Artifacts;
  attributesData = attributesDataJson.ArtifactAttributes;
  rarityData = rarityDataJson.rarities;
  slotTypeData = slotTypeDataJson.slotTypes;
  typeData = typeDataJson.types;
}

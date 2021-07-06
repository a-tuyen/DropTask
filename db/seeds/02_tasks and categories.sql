-- tasks seed data
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Buy toothpase', 'the mint kind', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toothbrush%2C_Toothpaste%2C_Dental_Care_%28571741%29_%28cropped%29.jpg/275px-Toothbrush%2C_Toothpaste%2C_Dental_Care_%28571741%29_%28cropped%29.jpg',
false, 1, 2);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Watch Shawshank Redemption', 'classic movie', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm',
false, 1, 1);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Read redwall', 'hamsters with swords?', 'https://upload.wikimedia.org/wikipedia/en/4/49/RedwallUSCover.jpg',
false, 1, 4);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Make reservation at the flying pig', 'so good', 'https://pbs.twimg.com/profile_images/744965911816265729/y2jA2Cgi_400x400.jpg',
false, 1, 3);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Watch robo-cop', 'bizzare movie', 'https://upload.wikimedia.org/wikipedia/en/1/1a/RoboCop_%28Peter_Weller%29.png',
false, 1, 1);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Eat at la taqueria', 'my favourite tacos', 'https://media-cdn.tripadvisor.com/media/photo-s/17/60/51/2a/photo1jpg.jpg',
false, 1, 3);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Rent Avengers', 'great action movie', 'https://www.stylist.co.uk/images/app/uploads/2018/09/14124114/09a_aeg_dompayoff_1sht-crop-1600329397-1161x1161.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
false, 1, 1);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('pick up McDonalds', 'Couple big Macs', 'https://pbs.twimg.com/profile_images/1334527633992761344/kwlzzLs6_400x400.png',
false, 1, 3);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Checkout pirates of the caribbean', 'pirates are still cool right?', 'https://c-sf.smule.com/rs-s49/arr/45/ca/17a30efa-51fc-4386-9140-4642523d76d1.jpg',
false, 1, 1);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Get duct tape', 'handymans tool', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Duct-tape.jpg/220px-Duct-tape.jpg',
false, 1, 2);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Eat at nosh', 'I think its itialian', 'https://pbs.twimg.com/profile_images/700082393793765377/Z4WgfXP7.jpg',
false, 1, 3);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Read catcher in the rye', 'Classic J. D. Salinger', 'https://entertainment.time.com/wp-content/uploads/sites/3/2011/08/03_top10censoredbooks_catcherintherye.jpg?w=260',
false, 1, 4);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Get more string', 'What is there to say about string... its string.', 'https://greenmanbushcraft.2dimg.com/29/1424253173_82.jpg',
false, 1, 2);


-- categories

INSERT INTO categories (type) VALUES ('Movie');
INSERT INTO categories (type) VALUES ('Product');
INSERT INTO categories (type) VALUES ('Restaurant');
INSERT INTO categories (type) VALUES ('Book');
INSERT INTO categories (type) VALUES ('Uncategorized');

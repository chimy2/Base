-- set database
use management;

-- create customer table
create table customer(
    id int primary key auto_increment,
    image varchar(1024),
    name varchar(64),
    birthday varchar(64),
    gender varchar(64),
    job varchar(64)
) default character set utf8 collate utf8_general_ci;

insert into customer values (1, 'http://placeimg.com/64/64/1', 'chimy', 951013, '남자', '학생');
insert into customer values (2, 'http://placeimg.com/64/64/2', '치미', 940824, '여자', '개발자');
insert into customer values (3, 'http://placeimg.com/64/64/3', '침침', 951124, '남자', '프리랜서');
insert into customer values (4, 'http://placeimg.com/64/64/4', '쥐민', 130613, '남자', '변호사');
insert into customer values (5, 'http://placeimg.com/64/64/5', '쥐민', 201127, '여자', '검사');
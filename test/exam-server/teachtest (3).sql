-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-18 12:55:28
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `teachtest`
--

-- --------------------------------------------------------

--
-- 表的结构 `classes`
--

CREATE TABLE IF NOT EXISTS `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` int(100) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `classes`
--

INSERT INTO `classes` (`id`, `name`, `fid`) VALUES
(1, 20140914, 1),
(2, 20140915, 2),
(3, 20140916, 3),
(4, 20140917, 1),
(5, 20140918, 3);

-- --------------------------------------------------------

--
-- 表的结构 `fangxiang`
--

CREATE TABLE IF NOT EXISTS `fangxiang` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) COLLATE utf8_estonian_ci NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `fangxiang`
--

INSERT INTO `fangxiang` (`fid`, `fname`) VALUES
(1, '计算机'),
(2, '化学'),
(3, '英语'),
(4, '生物');

-- --------------------------------------------------------

--
-- 表的结构 `result`
--

CREATE TABLE IF NOT EXISTS `result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `selectSuccess` varchar(2000) NOT NULL,
  `selectErr` varchar(2000) NOT NULL,
  `jianda` varchar(2000) NOT NULL,
  `jiandaScore` varchar(1000) NOT NULL,
  `status` tinyint(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `result`
--

INSERT INTO `result` (`id`, `zid`, `sid`, `cid`, `selectSuccess`, `selectErr`, `jianda`, `jiandaScore`, `status`) VALUES
(11, 20, 1, 1, '31:2|32:2', '12|33', '29:for you |30:for me', '29:1|30:1', 1);

-- --------------------------------------------------------

--
-- 表的结构 `stu`
--

CREATE TABLE IF NOT EXISTS `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `sex` int(20) NOT NULL COMMENT '性别',
  `headPhoto` varchar(100) NOT NULL,
  `cid` int(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=77 ;

--
-- 转存表中的数据 `stu`
--

INSERT INTO `stu` (`id`, `name`, `pass`, `sex`, `headPhoto`, `cid`) VALUES
(1, '小辉7', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uploads/1563385321651-loveth.jpg', 1),
(51, '小敏', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 2),
(52, '小辉11', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uploads/1562065073617-07c3040e4e257edea209d45f1bfa0e07.jpeg', 1),
(53, '张三', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(54, '李四', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(55, '钱五', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(56, '孙六', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 1),
(57, '向七', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(58, '傅延', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 2),
(59, '冉然然', 'e10adc3949ba59abbe56e057f20f883e', 3, 'uploads/1562065891377-07c3040e4e257edea209d45f1bfa0e07.jpeg', 1),
(60, '贝楠', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2),
(61, '花羽', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2),
(62, '赵菲', 'e10adc3949ba59abbe56e057f20f883e', 3, 'uploads/1561969416352-07c3040e4e257edea209d45f1bfa0e07.jpeg', 2),
(63, '小敏', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 2),
(64, '小辉', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 3),
(65, '张三', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(66, '李四', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(67, '钱五', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(68, '孙六', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 1),
(69, '向七', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2),
(70, '傅延', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 2),
(71, '冉然', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 3),
(72, '贝楠', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2),
(73, '花羽', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2),
(74, '赵菲', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 3),
(75, '小敏', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 2),
(76, '小辉', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 3);

-- --------------------------------------------------------

--
-- 表的结构 `teach`
--

CREATE TABLE IF NOT EXISTS `teach` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `sex` int(20) NOT NULL,
  `headPhoto` varchar(200) NOT NULL,
  `cid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=50 ;

--
-- 转存表中的数据 `teach`
--

INSERT INTO `teach` (`id`, `name`, `pass`, `sex`, `headPhoto`, `cid`, `fid`) VALUES
(6, '江南', 'e35cf7b66449df565f93c607d5a81d09', 1, 'uploads/1563384943080-537e18bcf36585e60364e9eaf5251ff4.jpg', 1, 3),
(31, '路明非122', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uploads/1561836026750-loveth.jpg', 3, 1),
(38, '符芸12\r\n', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 2, 2),
(39, '符一', 'e10adc3949ba59abbe56e057f20f883e', 3, 'uploads/1562054371724-07c3040e4e257edea209d45f1bfa0e07.jpeg', 2, 1),
(40, '符十', 'e10adc3949ba59abbe56e057f20f883e', 2, 'uploads/1561869967691-88cdfffa9f13a9cb1a51bb1e68e65647.jpg', 3, 3),
(41, '符三', 'e10adc3949ba59abbe56e057f20f883e', 3, 'uploads/1562054608585-loveth.jpg', 2, 3),
(42, '许敏', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uploads/1561838489803-loveth.jpg', 2, 3),
(43, '花辉2', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uploads/1561968848187-537e18bcf36585e60364e9eaf5251ff4.jpg', 3, 3),
(44, '符芸', 'e10adc3949ba59abbe56e057f20f883e', 3, 'uploads/1562053287330-07c3040e4e257edea209d45f1bfa0e07.jpeg', 1, 2),
(45, '符一', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2, 1),
(46, '符二', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2, 3),
(47, '符三', 'e10adc3949ba59abbe56e057f20f883e', 3, '', 2, 3),
(48, '许敏', 'e10adc3949ba59abbe56e057f20f883e', 1, '', 2, 3),
(49, '花辉', 'e10adc3949ba59abbe56e057f20f883e', 2, '', 3, 3);

-- --------------------------------------------------------

--
-- 表的结构 `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `options` varchar(500) NOT NULL,
  `fid` int(11) NOT NULL,
  `typeid` int(11) NOT NULL,
  `daan` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- 转存表中的数据 `test`
--

INSERT INTO `test` (`id`, `title`, `options`, `fid`, `typeid`, `daan`) VALUES
(12, 'I was dismayed_________ the thought of teaching algebra and geometry', 'for|of|by|at', 3, 1, '3'),
(13, '丰富多彩的颜色变化增添了化学实验的魅力，下列有关反应颜色变化的叙述中，正确的是(　　)  　　①新制氯水久置后→浅黄绿色消失　②淀粉溶液遇单质碘→蓝色　③蔗糖中加入浓硫酸搅拌→白色  　　④SO2通入品红溶液中→红色褪去　⑤氨气通入酚酞溶液中→红色', '①②③④|②③④⑤|①②④⑤|全部', 2, 1, '2'),
(14, '下列叙述正确的是', '氯水通入SO2后溶液的酸性减弱|向明矾溶液中加入过量NaOH溶液会产生大量白色沉淀|Na、Fe等金属在一定条件下与水反应都生成H2和对应的碱|浓硫酸、浓硝酸在加热条件下能将木炭氧化为二氧化碳', 2, 1, '3'),
(15, '科学的假设与猜想是科学探究的先导和价值所在。在下列假设或猜想引导下的探究肯定没有意义的是', '探究SO2和Na2O2反应可能有Na2SO4生成|探究NO和N2O可能化合生成NO2|探究NO2可能被NaOH溶液完全吸收生成NaNO2和NaNO3|探究向滴有酚酞试液的NaOH溶液中通入Cl2，酚酞红色褪去的原因是溶液的酸碱性改变还是HClO的漂白作用', 2, 1, '1'),
(16, '能实现下列物质间直接转化的元素是(　　)  　　单质――→ O2氧化物――→ H2O酸与碱――→ NaOH或HCl盐', '硅|硫|氮|铁', 2, 1, '1'),
(17, '影响化学反应速率的主要外界因素有', '浓度|温度|催化剂|压强|湿度', 2, 2, '0|1|2|3'),
(18, '盐的类型有', '强酸强碱盐|强酸弱碱盐|强碱弱酸盐|弱酸弱碱盐|酸式盐', 2, 2, '0|1|2|3'),
(19, '卤素包括', '氟|氯|溴|碘|钠', 2, 2, '0|1|2|3'),
(20, '实验室使用药品的"三不"原则是什么', '', 2, 3, '不用手接触药品;不把鼻孔凑到容器口闻味道;不品尝药品'),
(21, '元素符号代表哪些意义', '', 2, 3, '元素符号的意义有两点：                                一、宏观上说表示一种元素；微观上说表示这种元素的一个原子.二、对直接有原子构成的物质,还可以表示这种单质.'),
(22, '以下计算机系统的部件哪一个不属于外部设备', '键盘|打印机|中央处理器|硬盘', 1, 1, '2'),
(23, '计算机存储数据的最小单位是二进制的()', '位(比特)|字节|字长|千字节', 1, 1, '0'),
(24, '以下对计算机病毒的描述，_是不正确的', '计算机病毒是人为编写的一段恶意代码|计算机病毒不会破坏计算机硬件系统|计算机病毒的传播途径主要是数据存储介质的交换和网络的链路|计算机病毒具有潜伏性', 1, 1, '1'),
(25, '下列属于系统软件的有', 'unis|dos|cad|excel', 1, 2, '0|1'),
(26, 'PowerPoint提供了两类模板，他们是', '设计模板|普通模板|备注页模板|内容模板', 1, 2, '0|3'),
(27, '简述微型计算机的组成', '', 1, 3, '微型计算机系统可分为1.硬件系统和 2.软件系统。                                       \n 软件系统分为 1.系统软件 2.应用软件。硬件系统分为 1.主机。 '),
(28, '计算机的性能指标有哪些', '', 1, 3, '字长、主频、存取周期、运算速度和内存储容量'),
(29, '请将以下这段话翻译成英文：     中国饮茶的传统可以追溯到公元前3000多年，但“下午茶”的概念却是到17世纪中叶(the mid 17th century)才在英国出现的。当时那里时兴的晚餐时间是晚上8点，所以一位公爵夫人(Duchess)养成了在下午4点约朋友吃糕点的习惯。很快下午茶成为当时的社会潮流。随东西方文化交流的加深，这个英国传统逐渐进入中国。如今，下午茶在国内日渐流行起来，尤其是在', '', 3, 3, 'Although the tradition of drinking tea dates back to more than 3,000 B.C.  in China, it was not unti'),
(30, '考研原因reasons for my choice', '', 3, 3, 'There are several reasons accounting for my endeavor.　　\nAbove all, I have been deeply impressed by '),
(31, 'Research into the Internet in china began in the ______', '1980''s|2000''s|Internet Cafe''s|1990''s', 3, 1, '0'),
(32, 'It is also possible that', 'small countries occupy certain places within some high-tech sectors|small countries will have a equal share in high-tech markets|small countries also realize prosperity through specializing in low-tech production', 3, 1, '0'),
(33, 'CAMEL Rating System includes', 'Capital adequarcy|Asset quality|Management ability|Earning performancy|Liqaidity', 3, 2, '0|1|2|3|4');

-- --------------------------------------------------------

--
-- 表的结构 `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `typeid` int(11) NOT NULL AUTO_INCREMENT,
  `typename` varchar(100) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `type`
--

INSERT INTO `type` (`typeid`, `typename`) VALUES
(1, '单选题'),
(2, '多选题'),
(3, '简答题');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(100) NOT NULL,
  `upass` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `uname`, `upass`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e'),
(2, '小辉', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- 表的结构 `zuti`
--

CREATE TABLE IF NOT EXISTS `zuti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `con` varchar(2000) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `teachid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `zuti`
--

INSERT INTO `zuti` (`id`, `fid`, `cid`, `con`, `start`, `end`, `teachid`) VALUES
(20, 3, 1, '12:2|31:2|32:2|33:4|29:5|30:4', '2019-07-16 03:15:00', '2019-07-16 03:40:00', 6);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

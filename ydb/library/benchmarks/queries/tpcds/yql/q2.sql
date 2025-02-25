{% include 'header.sql.jinja' %}

-- NB: Subquerys
$wscs =
 (  select sold_date_sk
        ,sales_price
  from (select ws_sold_date_sk sold_date_sk
              ,ws_ext_sales_price sales_price
        from {{web_sales}}) x
        union all
        (select cs_sold_date_sk sold_date_sk
              ,cs_ext_sales_price sales_price
        from {{catalog_sales}}));

$wswscs =
-- NB: Must add alias for future queries
 (select date_dim.d_week_seq d_week_seq,
        sum(case when (d_day_name='Sunday') then sales_price else null end) sun_sales,
        sum(case when (d_day_name='Monday') then sales_price else null end) mon_sales,
        sum(case when (d_day_name='Tuesday') then sales_price else  null end) tue_sales,
        sum(case when (d_day_name='Thursday') then sales_price else null end) thu_sales,
        sum(case when (d_day_name='Wednesday') then sales_price else null end) wed_sales,
        sum(case when (d_day_name='Friday') then sales_price else null end) fri_sales,
        sum(case when (d_day_name='Saturday') then sales_price else null end) sat_sales
-- NB: Must add correlation name for named expression.
 from $wscs wscs
     cross join {{date_dim}} as date_dim
 where date_dim.d_date_sk = sold_date_sk
 -- NB: Must use correlation name in group by
 group by date_dim.d_week_seq);

-- start query 1 in stream 0 using template query2.tpl and seed 1819994127
select d_week_seq1
-- NB: Use Math::Round
-- NB: Negate second argument!!!
       ,$round(sun_sales1/sun_sales2,-2)
       ,$round(mon_sales1/mon_sales2,-2)
       ,$round(tue_sales1/tue_sales2,-2)
       ,$round(wed_sales1/wed_sales2,-2)
       ,$round(thu_sales1/thu_sales2,-2)
       ,$round(fri_sales1/fri_sales2,-2)
       ,$round(sat_sales1/sat_sales2,-2)
 from
 (select wswscs.d_week_seq d_week_seq1
        ,sun_sales sun_sales1
        ,mon_sales mon_sales1
        ,tue_sales tue_sales1
        ,wed_sales wed_sales1
        ,thu_sales thu_sales1
        ,fri_sales fri_sales1
        ,sat_sales sat_sales1
  from $wswscs wswscs cross join {{date_dim}} as date_dim
  where date_dim.d_week_seq = wswscs.d_week_seq and
        d_year = 2001) y cross join
 (select wswscs.d_week_seq d_week_seq2
        ,sun_sales sun_sales2
        ,mon_sales mon_sales2
        ,tue_sales tue_sales2
        ,wed_sales wed_sales2
        ,thu_sales thu_sales2
        ,fri_sales fri_sales2
        ,sat_sales sat_sales2
  from $wswscs wswscs
        cross join {{date_dim}} as date_dim
  where date_dim.d_week_seq = wswscs.d_week_seq and
        d_year = 2001+1) z
 where d_week_seq1=d_week_seq2-53
 order by d_week_seq1;

-- end query 1 in stream 0 using template query2.tpl

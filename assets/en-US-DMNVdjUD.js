const e={success:"Login successfully",auth_error:"Please check your server address and credentials",login_to_your_server:"Login to your server",submit_error:"Please fill in all required fields",server_label:"Server address",server_placeholder:"Please input server address",token_label:"API Token",token_placeholder:"Please input API token",username_label:"Username",username_placeholder:"Please input username",password_label:"Password",password_placeholder:"Please input password",login_button:"Login",another_login_method:"Or login with",another_login_button:"Username and password",need_help:"Need more info?",miniflux_official_website:"Go to Miniflux official website"},t={all:"All",today:"Today",starred:"Starred",history:"History",articles:"Articles",feeds:"Feeds"},a={mark_as_read_error:"Failed to mark as read, please try again later",mark_as_unread_error:"Failed to markd as unread, please try again later",star_error:"Failed to star, please try again later",unstar_error:"Failed to unstar, please try again later",fetched_content_success:"Fetched content successfully",fetched_content_error:"Failed to fetch content, please try again later","saved_to_third-party_services_success":"Saved to third-party services successfully","saved_to_third-party_services_error":"Failed to save to third-party services, please try again later, or check your integration settings"},r={marked_as_starred:"Marked as starred",unmarked_as_starred:"Unmarked as starred",marked_as_read:"Marked as read",marked_as_unread:"Marked as unread",update_failed:"Failed to update, please try again"},s={search_placeholder:"Search...",search_tooltip:`Search syntax:
• Text: apple banana
• Exact text: "red apple"
• Exclude: -text or -"text"
• Must include: +text or +"text"
• OR search: text1|text2
Example: "red apple" +fresh -rotten banana|orange`,search_type_title:"Title",search_type_content:"Content",search_type_author:"Author",sort_direction_desc:"Newest first",sort_direction_asc:"Oldest first",filter_status_all:"All",filter_status_unread:"Unread",mark_all_as_read_success:"All articles marked as read",mark_all_as_read_error:"Failed to mark all as read",mark_all_as_read_confirm:"Mark all as read?"},l={mark_as_read_error:"Failed to mark as read, please try again later"},o={mark_as_read_error:"Failed to mark duplicate articles as read"},d={add_feed_success:"Added a feed successfully",add_feed_error:"Failed to add a feed",add_feed_url_empty:"Feed URL cannot be empty",add_feed_modal_title:"Add Feed",add_feed_modal_feed_url_label:"Feed URL",add_feed_modal_feed_url_placeholder:"Please input a feed URL",add_feed_modal_category_label:"Category",add_feed_modal_category_placeholder:"Please select a category",add_feed_modal_crawler_label:"Fetch original content"},i={theme_option_light:"Light",theme_option_dark:"Dark",theme_option_system:"System",logout_success:"Successfully logged out",add_feed:"Add a feed",show_all_feeds:"Show all feeds",hide_some_feeds:"Hide some feeds",settings:"Settings",reset_settings:"Reset Settings",logout:"Logout",settings_reset_confirm:"Confirm Reset",settings_reset_description:"Are you sure you want to reset your settings? This action cannot be undone.",logout_confirm:"Confirm Logout",logout_description:"Are you sure you want to logout? This action cannot be undone."},_={refresh_success:"Refreshed",refresh_error:"Failed to refresh",refresh_feed:"Refresh feed",bulk_update_success:"Bulk update successfully",bulk_update_error:"Failed to bulk update, please try again",bulk_refresh_error_feeds_message:"Starting refresh of error feeds, please wait",bulk_refresh_error_feeds_result:"Feeds refreshed. Success: %{success}, Failure: %{failure}",refresh_feeds_title:"Refresh Feeds",refresh_feeds_cancel:"Cancel",refresh_feeds_error:"Error Feeds",refresh_feeds_all:"All Feeds",refresh_feeds_description:"Do you want to refresh all feeds or just the ones with errors?",remove_feed_success:"Unfollowed feed: %{title}",remove_feed_error:"Failed to unfollow feed: %{title}",table_title:"Title",table_url:"URL",table_category:"Category",table_checked_at:"Checked at",table_actions:"Actions",table_feed_edit_label:"Edit this feed",table_feed_refresh_label:"Refresh this feed",table_feed_remove_confirm:"Unfollow this feed?",update_feed_success:"Feed updated successfully",update_feed_error:"Failed to update feed",search_placeholder:"Search title or site URL or feed URL",modal_bulk_update_title:"Bulk Update Hosts",modal_bulk_update_description:"This will bulk update filtered feeds' hosts. Only recommended for RssHub.",modal_edit_feed_title:"Edit Feed",modal_edit_feed_submit_error:"Feed URL cannot be empty",modal_edit_feed_category_label:"Category",modal_edit_feed_title_label:"Title",modal_edit_feed_title_placeholder:"Please input feed title",modal_edit_feed_site_url_label:"Site URL",modal_edit_feed_site_url_placeholder:"Please input site URL",modal_edit_feed_feed_url_label:"Feed URL",modal_edit_feed_feed_url_placeholder:"Please input feed URL",modal_edit_feed_hidden_label:"Hidden",modal_edit_feed_disabled_label:"Disabled",modal_edit_feed_crawler_label:"Fetch original content",modal_edit_feed_crawler_tooltip:"Only affects newly retrieved articles"},n={add_category_success:"Category added successfully",add_category_error:"Failed to add category",update_category_success:"Category updated successfully",update_category_error:"Failed to update category",remove_category_success:"Deleted category: %{title}",remove_category_error:"Failed to delete category: %{title}"},c={feeds:"Feeds",categories:"Categories",general:"General",appearance:"Appearance",hotkeys:"Hotkeys",default_home_page_label:"Default home page",default_home_page_description:"Which page to show by default:",default_home_page_option_all:"All",default_home_page_option_today:"Today",default_home_page_option_starred:"Starred",default_home_page_option_history:"History",entries_order_label:"Entries order",entries_order_description:"What order to show entries:",entries_order_option_published_at:"Published at",entries_order_option_created_at:"Updated at",entries_per_page_label:"Entries per page",entries_per_page_description:"Show how many entries per page:",remove_duplicates_label:"Remove duplicate articles",remove_duplicates_description:"Automatically remove duplicate articles based on:",remove_duplicates_option_none:"None",remove_duplicates_option_hash:"Hash",remove_duplicates_option_title:"Title",remove_duplicates_option_url:"URL",mark_read_on_scroll_label:"Mark articles as read when scrolled off screen",mark_read_on_scroll_description:"Automatically mark articles as read when they are scrolled out of the visible screen area"},u={theme_color_label:"Theme color",theme_color_description:"Choose your theme color",theme_color_aria_label:"Change theme color to %{color}",compact_article_list_label:"Compact article list",compact_article_list_description:"Use small thumbnail in article list",show_detailed_relative_time_label:"Show detailed relative time",show_detailed_relative_time_description:"Show detailed relative time in article list",show_feed_icon_label:"Show feed icon",show_feed_icon_description:"Show feed icon in feed list and article list",language_label:"Language",language_description:"Choose your language:",font_size_label:"Font size",font_size_description:"Adjust article text size",article_width_label:"Article width",article_width_description:"Adjust article width"},h={key:"Key",function:"Function",esc:"Exit the article view and return to the list",left:"Navigate to the previous article in the list",ctrl_left:"Navigate to the previous unread article in the list",right:"Navigate to the next article in the list",ctrl_right:"Navigate to the next unread article in the list",a:"Save the current article to third-party services",b:"Open the current article's link in a new browser tab",d:"Fetch and display the original content of the current article",m:"Toggle the read status of the current article",s:"Toggle the star status (bookmark) of the current article",v:"Open the photo slider for viewing all images in the current article"},f={just_now:"just now",year:"%{count} year",years:"%{count} years",month:"%{count} month",months:"%{count} months",day:"%{count} day",days:"%{count} days",hour:"%{count} hour",hours:"%{count} hours",minute:"%{count} minute",minutes:"%{count} minutes",in_time:"in %{time}",time_ago:"%{time} ago"},p={login:e,sidebar:t,actions:a,article_card:r,article_list:s,content:l,deduplicate:o,main:d,header:i,feed_table:_,category_list:n,settings:c,appearance:u,hotkeys:h,date:f};export{a as actions,u as appearance,r as article_card,s as article_list,n as category_list,l as content,f as date,o as deduplicate,p as default,_ as feed_table,i as header,h as hotkeys,e as login,d as main,c as settings,t as sidebar};

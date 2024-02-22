
#import "BonjourClientImpl.h"

/*
if ($pri==200) $ppt=100;    p20
if ($pri==500) $ppt=250;    p50
if ($pri==1000) $ppt=550;   p110
if ($pri==3000) $ppt=1750;  p350
if ($pri==5000) $ppt=3000;  p600
*/

@implementation NetServiceBrowserDelegate


- (id)init
{
    self = [super init];
    services = [[NSMutableArray alloc] init];
    searching = NO;
	NSLog(@"init %@",status);
	status = @"Initializing";
	NSLog(@"init %@",status);
    
    if ([SKPaymentQueue canMakePayments] == NO) {
        NSLog(@"no");
    } else {
        NSLog(@"yes");    
    }
 /*   
    MyStoreObserver *observer = [[MyStoreObserver alloc] init];
	[[SKPaymentQueue defaultQueue] addTransactionObserver:observer];
 */
 	[[SKPaymentQueue defaultQueue] addTransactionObserver:self];
  
//	NSSet *productIDs = [NSSet setWithObjects:@"com.coremedia.dragon.p20",@"com.coremedia.dragon.p50",@"com.coremedia.dragon.p110",@"com.coremedia.dragon.p350",@"com.coremedia.dragon.p600",nil];
    NSSet *productIDs = [NSSet setWithObjects:@"com.coremedia.aqua.p20",@"com.coremedia.aqua.p50",@"com.coremedia.aqua.p110",@"com.coremedia.aqua.p350",@"com.coremedia.aqua.p600",nil];		
	SKProductsRequest *productsRequest= [[SKProductsRequest alloc] initWithProductIdentifiers: productIDs];
	productsRequest.delegate = self;
	[productsRequest start];
    
    return self;
}

- (void)productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response
{
    NSArray *products = response.products;
	NSLog(@"SKi %i",[products count]);
	
    //	MyStoreObserver *observer = [[MyStoreObserver alloc] init];
    //	[[SKPaymentQueue defaultQueue] addTransactionObserver:observer];
    /*
     for(int i=0;i<[products count];i++) {
     SKProduct *product = [products objectAtIndex:i];
     NSLog(@"Name: %@ - Price: %f", [product localizedTitle], [[product price] doubleValue]);
     NSLog(@"Product identifier: %@", [product productIdentifier]);
     }
     */
    /*	
     if ([products count]>0) {
     SKPayment *payment = [SKPayment paymentWithProductIdentifier:kInAppPurchaseProUpgradeProductId];
     [[SKPaymentQueue defaultQueue] addPayment:payment];
     }
     */	
    for (NSString *invalidProductId in response.invalidProductIdentifiers)
    {
        NSLog(@"Invalid product id: %@" , invalidProductId);
    }
    
    // finally release the reqest we alloc/init’ed in requestProUpgradeProductData
    [productsRequest release];
    
    //    [[NSNotificationCenter defaultCenter] postNotificationName:kInAppPurchaseManagerProductsFetchedNotification object:self userInfo:nil];
} 

- (void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transactions {
    BOOL purchasing = YES;
    for (SKPaymentTransaction *transaction in transactions) {
        switch (transaction.transactionState) {
                // 購入中
            case SKPaymentTransactionStatePurchasing: {
                no=0;
                NSLog(@"Payment Transaction Purchasing");
                break;
            }
                // 購入成功
            case SKPaymentTransactionStatePurchased: {
                NSLog(@"Payment Transaction END Purchased: %@", transaction.transactionIdentifier);
                purchasing = NO;
                status=transaction.payment.productIdentifier;
                NSLog(@"%@",status);                
                if ([status isEqualToString:@"com.coremedia.aqua.p20"]) no=2;
                if ([status isEqualToString:@"com.coremedia.aqua.p50"]) no=3;
                if ([status isEqualToString:@"com.coremedia.aqua.p110"]) no=4;
                if ([status isEqualToString:@"com.coremedia.aqua.p350"]) no=5;
                if ([status isEqualToString:@"com.coremedia.aqua.p600"]) no=6;
                status=[NSString stringWithFormat:@"%i",[transaction.transactionIdentifier intValue]];
                [queue finishTransaction:transaction];
                break;
            }
                // 購入失敗
            case SKPaymentTransactionStateFailed: {
                no=-1;
                NSLog(@"Payment Transaction END Failed: %@ %@", transaction.transactionIdentifier, transaction.error);
                purchasing = NO;
                // ... アラートを表示 ...
                [queue finishTransaction:transaction];
                break;
            }
                // 購入履歴復元
            case SKPaymentTransactionStateRestored: {
                NSLog(@"Payment Transaction END Restored: %@", transaction.transactionIdentifier);
                // 本来ここに到達しない
                purchasing = NO;
                [queue finishTransaction:transaction];
                break;
            }
        }
    }
}

- (void)dealloc
{
    [services release];
    [super dealloc];	
}



// Sent when browsing begins
- (void)netServiceBrowserWillSearch:(NSNetServiceBrowser *)browser
{
    searching = YES;
	status = @"Searching";
	
	[services removeAllObjects];
}



// Sent when browsing stops
- (void)netServiceBrowserDidStopSearch:(NSNetServiceBrowser *)browser
{
    searching = NO;
	status = @"Done";
}



// Sent if browsing fails
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
			 didNotSearch:(NSDictionary *)errorDict
{
    searching = NO;
	NSString * msg = @"Failed.";	
	status = [msg stringByAppendingString:[[errorDict objectForKey:NSNetServicesErrorCode] stringValue]];
}



// Sent when a service appears
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
		   didFindService:(NSNetService *)aNetService
			   moreComing:(BOOL)moreComing
{
    [services addObject:aNetService];
}



// Sent when a service disappears
- (void)netServiceBrowser:(NSNetServiceBrowser *)browser
		 didRemoveService:(NSNetService *)aNetService
			   moreComing:(BOOL)moreComing
{
    [services removeObject:aNetService];	
}


- (int)getCount
{
//	return [services count];
    NSLog(@"return %i",no);
    return no;
}

- (NSNetService *)getService:(int)serviceNo
{
	return [services objectAtIndex:serviceNo];
}

- (NSString *)getStatus
{
	return status;
}

@end

static NetServiceBrowserDelegate* delegateObject = nil;
static NSNetServiceBrowser *serviceBrowser = nil;
int n;

// Converts C style string to NSString
NSString* CreateNSString (const char* string)
{
	if (string)
		return [NSString stringWithUTF8String: string];
	else
		return [NSString stringWithUTF8String: ""];
}

// Helper method to create C string copy
char* MakeStringCopy (const char* string)
{
	if (string == NULL)
		return NULL;
	
	char* res = (char*)malloc(strlen(string) + 1);
	strcpy(res, string);
	return res;
}

// When native code plugin is implemented in .mm / .cpp file, then functions
// should be surrounded with extern "C" block to conform C function naming rules
extern "C" {

	void _StartLookup (const char* service, const char* domain)
	{
        n=[CreateNSString(domain) intValue];
        NSLog(@"_StartLookup %i %@ %@",n,CreateNSString(service),CreateNSString(domain));
        if (n==2) {
            SKPayment *payment = [SKPayment paymentWithProductIdentifier:@"com.coremedia.aqua.p20"];
            [[SKPaymentQueue defaultQueue] addPayment:payment];
        }
        if (n==3) {
            SKPayment *payment = [SKPayment paymentWithProductIdentifier:@"com.coremedia.aqua.p50"];
            [[SKPaymentQueue defaultQueue] addPayment:payment];
        }
        if (n==4) {
            SKPayment *payment = [SKPayment paymentWithProductIdentifier:@"com.coremedia.aqua.p110"];
            [[SKPaymentQueue defaultQueue] addPayment:payment];
        }
        if (n==5) {
            SKPayment *payment = [SKPayment paymentWithProductIdentifier:@"com.coremedia.aqua.p350"];
            [[SKPaymentQueue defaultQueue] addPayment:payment];
        }
        if (n>=6) {
            SKPayment *payment = [SKPayment paymentWithProductIdentifier:@"com.coremedia.aqua.p600"];
            [[SKPaymentQueue defaultQueue] addPayment:payment];
        }
        
		if (delegateObject == nil)
			delegateObject = [[NetServiceBrowserDelegate alloc] init];
		
		
		if (serviceBrowser == nil)
			serviceBrowser = [[NSNetServiceBrowser alloc] init];
		
		[serviceBrowser setDelegate:delegateObject];
		
		// Call "searchForServicesOfType" and pass NSStrings as parameters. By default mono
		// marshals all .Net strings as UTF-8 C style strings.
		[serviceBrowser searchForServicesOfType: CreateNSString(service) inDomain: CreateNSString(domain)];
	}
	
/*
 const char* _GetLookupStatus ()
	{
		// By default mono string marshaler creates .Net string for returned UTF-8 C string 
		// and calls free for returned value, thus returned strings should be allocated on heap
		return MakeStringCopy([[delegateObject getStatus] UTF8String]);
	}
*/
	
	const char* _GetLookupStatus ()
	{
		// By default mono string marshaler creates .Net string for returned UTF-8 C string 
		// and calls free for returned value, thus returned strings should be allocated on heap
		return MakeStringCopy([[delegateObject getStatus] UTF8String]);
	}

	int _GetServiceCount ()
	{
		return [delegateObject getCount];
	}
	
	const char* _GetServiceName (int serviceNumber)
	{
		// By default mono string marshaler creates .Net string for returned UTF-8 C string 
		// and calls free for returned value, thus returned strings should be allocated on heap
		return MakeStringCopy([[[delegateObject getService:serviceNumber] name] UTF8String]);
	}
	
	void _Stop()
	{
		[serviceBrowser stop];
	}
	
}

